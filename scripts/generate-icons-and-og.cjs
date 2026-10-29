const { app, BrowserWindow } = require('electron');
const fs = require('node:fs');
const path = require('node:path');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const buildDir = path.join(rootDir, 'build');
const electronDir = path.join(rootDir, 'electron');

/**
 * Empacota múltiplos buffers PNG em um arquivo .ICO válido (formato Windows Vista+ PNG-in-ICO)
 */
function createIcoFromPngBuffers(pngEntries) {
  const count = pngEntries.length;
  const headerSize = 6 + count * 16;
  let offset = headerSize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(count, 4); // Image count

  pngEntries.forEach((entry, idx) => {
    const dirOffset = 6 + idx * 16;
    const w = entry.size >= 256 ? 0 : entry.size;
    const h = entry.size >= 256 ? 0 : entry.size;
    header.writeUInt8(w, dirOffset + 0);
    header.writeUInt8(h, dirOffset + 1);
    header.writeUInt8(0, dirOffset + 2); // Color palette
    header.writeUInt8(0, dirOffset + 3); // Reserved
    header.writeUInt16LE(1, dirOffset + 4); // Color planes
    header.writeUInt16LE(32, dirOffset + 6); // Bits per pixel
    header.writeUInt32LE(entry.buffer.length, dirOffset + 8); // Size of PNG data
    header.writeUInt32LE(offset, dirOffset + 12); // Offset
    offset += entry.buffer.length;
  });

  return Buffer.concat([header, ...pngEntries.map((e) => e.buffer)]);
}

// Variantes do SVG do ícone:
// 1. Standard (rounded squircle com fundo obsidian e borda dourada)
// 2. Full-bleed (quadrado 100% preenchido sem cantos transparentes para iOS AppIcon, Apple Touch Icon e Maskable)
// 3. Round (círculo medalhão para Android ic_launcher_round)
// 4. Foreground (emblema centralizado em fundo transparente com safe-zone 66dp/108dp para Android Adaptive Icon)
function getIconSvgVariant(baseSvg, mode) {
  if (mode === 'standard') {
    return baseSvg;
  }

  if (mode === 'fullbleed') {
    return baseSvg
      .replace(
        '<rect x="8" y="8" width="496" height="496" rx="112" fill="url(#bg-sanctuary)"/>',
        '<rect x="0" y="0" width="512" height="512" fill="url(#bg-sanctuary)"/>'
      )
      .replace(
        '<rect x="8" y="8" width="496" height="496" rx="112" fill="url(#sacred-aura)"/>',
        '<rect x="0" y="0" width="512" height="512" fill="url(#sacred-aura)"/>'
      )
      .replace(
        '<rect x="8" y="8" width="496" height="496" rx="112" fill="url(#vignette)"/>',
        '<rect x="0" y="0" width="512" height="512" fill="url(#vignette)"/>'
      )
      .replace(
        '<rect x="10" y="10" width="492" height="492" rx="110" stroke="url(#gold-imperial)" stroke-width="6" stroke-opacity="0.85"/>',
        '<rect x="18" y="18" width="476" height="476" rx="88" stroke="url(#gold-imperial)" stroke-width="5" stroke-opacity="0.72"/>'
      );
  }

  if (mode === 'maskable') {
    // Emblema com respiro seguro de 20% para máscaras circulares/squircle do Android/PWA
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" fill="none">
      <defs>
        <linearGradient id="m-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#161C2B"/>
          <stop offset="50%" stop-color="#0C0F17"/>
          <stop offset="100%" stop-color="#06080C"/>
        </linearGradient>
        <radialGradient id="m-aura" cx="50%" cy="42%" r="50%">
          <stop offset="0%" stop-color="#F5DC8B" stop-opacity="0.28"/>
          <stop offset="100%" stop-color="#0B0D12" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="512" height="512" fill="url(#m-bg)"/>
      <rect width="512" height="512" fill="url(#m-aura)"/>
      <g transform="translate(56, 56) scale(0.78125)">
        ${baseSvg
          .replace(/<svg[^>]*>/, '')
          .replace(/<\/svg>\s*$/, '')
          .replace(/<rect x="8" y="8"[^/]*\/>/g, '')
          .replace(/<rect x="10" y="10"[^/]*\/>/g, '')
          .replace(/<rect x="28" y="28"[^/]*\/>/g, '')}
      </g>
    </svg>`;
  }

  if (mode === 'round') {
    return baseSvg
      .replace(
        '<rect x="8" y="8" width="496" height="496" rx="112" fill="url(#bg-sanctuary)"/>',
        '<circle cx="256" cy="256" r="248" fill="url(#bg-sanctuary)"/>'
      )
      .replace(
        '<rect x="8" y="8" width="496" height="496" rx="112" fill="url(#sacred-aura)"/>',
        '<circle cx="256" cy="256" r="248" fill="url(#sacred-aura)"/>'
      )
      .replace(
        '<rect x="8" y="8" width="496" height="496" rx="112" fill="url(#vignette)"/>',
        '<circle cx="256" cy="256" r="248" fill="url(#vignette)"/>'
      )
      .replace(
        '<rect x="10" y="10" width="492" height="492" rx="110" stroke="url(#gold-imperial)" stroke-width="6" stroke-opacity="0.85"/>',
        '<circle cx="256" cy="256" r="245" stroke="url(#gold-imperial)" stroke-width="6" stroke-opacity="0.85"/>'
      )
      .replace(
        '<rect x="28" y="28" width="456" height="456" rx="94" stroke="url(#gold-imperial)" stroke-width="1.8" stroke-opacity="0.32"/>',
        '<circle cx="256" cy="256" r="228" stroke="url(#gold-imperial)" stroke-width="1.8" stroke-opacity="0.32"/>'
      )
      .replace(/<path d="M56 76[^"]*"\/>/g, '')
      .replace(/<path d="M456 76[^"]*"\/>/g, '')
      .replace(/<path d="M56 436[^"]*"\/>/g, '')
      .replace(/<path d="M456 436[^"]*"\/>/g, '');
  }

  if (mode === 'foreground') {
    // Android Adaptive Icon Foreground (108dp canvas, central 66dp safe zone = scale ~0.60)
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" fill="none">
      <g transform="translate(97.28, 97.28) scale(0.62)">
        ${baseSvg
          .replace(/<svg[^>]*>/, '')
          .replace(/<\/svg>\s*$/, '')
          .replace(/<rect x="8" y="8"[^/]*\/>/g, '')
          .replace(/<rect x="10" y="10"[^/]*\/>/g, '')
          .replace(/<rect x="28" y="28"[^/]*\/>/g, '')
          .replace(/<path d="M56 76[^"]*"\/>/g, '')
          .replace(/<path d="M456 76[^"]*"\/>/g, '')
          .replace(/<path d="M56 436[^"]*"\/>/g, '')
          .replace(/<path d="M456 436[^"]*"\/>/g, '')}
      </g>
    </svg>`;
  }

  return baseSvg;
}

app.whenReady().then(async () => {
  try {
    fs.mkdirSync(buildDir, { recursive: true });

    const baseIconSvg = fs.readFileSync(path.join(publicDir, 'favicon.svg'), 'utf8');
    const ogSvg = fs.readFileSync(path.join(publicDir, 'og-image.svg'), 'utf8');

    const win = new BrowserWindow({
      width: 1280,
      height: 800,
      show: false,
      webPreferences: {
        offscreen: true,
        contextIsolation: false,
        nodeIntegration: true
      }
    });

    const htmlContent = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=JetBrains+Mono:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>
  <script>
    window.renderSvgToPngBase64 = async function(svgString, width, height, opaqueBg) {
      await document.fonts.ready;
      const canvas = document.createElement('canvas');
      // Supersample 2x for ultra-crisp anti-aliasing when <= 1200
      const scale = (width <= 1200 && height <= 1200) ? 2 : 1;
      canvas.width = width * scale;
      canvas.height = height * scale;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      if (opaqueBg) {
        ctx.fillStyle = opaqueBg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const img = new Image();
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);

      if (scale === 1) {
        return canvas.toDataURL('image/png').replace(/^data:image\\/png;base64,/, '');
      }

      const outCanvas = document.createElement('canvas');
      outCanvas.width = width;
      outCanvas.height = height;
      const outCtx = outCanvas.getContext('2d');
      outCtx.imageSmoothingEnabled = true;
      outCtx.imageSmoothingQuality = 'high';
      if (opaqueBg) {
        outCtx.fillStyle = opaqueBg;
        outCtx.fillRect(0, 0, width, height);
      }
      outCtx.drawImage(canvas, 0, 0, width, height);
      return outCanvas.toDataURL('image/png').replace(/^data:image\\/png;base64,/, '');
    };
  </script>
</body>
</html>`;

    await win.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent));

    async function renderPng(svgStr, width, height, opaqueBg = null) {
      const b64 = await win.webContents.executeJavaScript(
        `window.renderSvgToPngBase64(${JSON.stringify(svgStr)}, ${width}, ${height}, ${JSON.stringify(opaqueBg)})`
      );
      return Buffer.from(b64, 'base64');
    }

    const svgStandard = getIconSvgVariant(baseIconSvg, 'standard');
    const svgFullBleed = getIconSvgVariant(baseIconSvg, 'fullbleed');
    const svgMaskable = getIconSvgVariant(baseIconSvg, 'maskable');
    const svgRound = getIconSvgVariant(baseIconSvg, 'round');
    const svgForeground = getIconSvgVariant(baseIconSvg, 'foreground');

    // 1. Open Graph Image (1200x630)
    console.log('Renderizando Open Graph Image (1200x630)...');
    const ogPngBuffer = await renderPng(ogSvg, 1200, 630, '#0B0D12');
    fs.writeFileSync(path.join(publicDir, 'og-image.png'), ogPngBuffer);

    // 2. Web & PWA Icons
    console.log('Renderizando ícones Web & PWA...');
    const icon1024 = await renderPng(svgStandard, 1024, 1024);
    const icon512 = await renderPng(svgStandard, 512, 512);
    const iconMaskable512 = await renderPng(svgMaskable, 512, 512, '#0B0D12');
    const icon192 = await renderPng(svgStandard, 192, 192);
    const appleTouch180 = await renderPng(svgFullBleed, 180, 180, '#0B0D12');
    const fav32 = await renderPng(svgStandard, 32, 32);
    const fav16 = await renderPng(svgStandard, 16, 16);

    fs.writeFileSync(path.join(publicDir, 'icon-1024.png'), icon1024);
    fs.writeFileSync(path.join(publicDir, 'icon-512.png'), icon512);
    fs.writeFileSync(path.join(publicDir, 'icon-maskable-512.png'), iconMaskable512);
    fs.writeFileSync(path.join(publicDir, 'icon-192.png'), icon192);
    fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouch180);
    fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), fav32);
    fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), fav16);

    // 3. Windows .ICO (16, 32, 48, 64, 128, 256)
    console.log('Gerando pacotes .ICO para Windows e Favicon...');
    const icoSizes = [16, 32, 48, 64, 128, 256];
    const icoEntries = [];
    for (const s of icoSizes) {
      const buf = await renderPng(svgStandard, s, s);
      icoEntries.push({ size: s, buffer: buf });
    }
    const icoBuffer = createIcoFromPngBuffers(icoEntries);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
    fs.writeFileSync(path.join(buildDir, 'icon.ico'), icoBuffer);
    fs.writeFileSync(path.join(buildDir, 'icon.png'), icon512);
    fs.writeFileSync(path.join(electronDir, 'icon.ico'), icoBuffer);
    fs.writeFileSync(path.join(electronDir, 'icon.png'), icon512);

    // 4. Master Native Icons (Android & iOS) in resources/native-icons
    console.log('Gerando ícones nativos para Android e iPhone (iOS)...');
    const nativeIconsDir = path.join(rootDir, 'resources', 'native-icons');
    const androidResDir = path.join(nativeIconsDir, 'android');
    const iosResDir = path.join(nativeIconsDir, 'ios');
    fs.mkdirSync(androidResDir, { recursive: true });
    fs.mkdirSync(iosResDir, { recursive: true });

    const androidMipmaps = [
      { folder: 'mipmap-mdpi', launcher: 48, foreground: 108 },
      { folder: 'mipmap-hdpi', launcher: 72, foreground: 162 },
      { folder: 'mipmap-xhdpi', launcher: 96, foreground: 216 },
      { folder: 'mipmap-xxhdpi', launcher: 144, foreground: 324 },
      { folder: 'mipmap-xxxhdpi', launcher: 192, foreground: 432 }
    ];

    for (const m of androidMipmaps) {
      const targetFolder = path.join(androidResDir, m.folder);
      fs.mkdirSync(targetFolder, { recursive: true });

      const launcherBuf = await renderPng(svgStandard, m.launcher, m.launcher);
      const roundBuf = await renderPng(svgRound, m.launcher, m.launcher);
      const fgBuf = await renderPng(svgForeground, m.foreground, m.foreground);

      fs.writeFileSync(path.join(targetFolder, 'ic_launcher.png'), launcherBuf);
      fs.writeFileSync(path.join(targetFolder, 'ic_launcher_round.png'), roundBuf);
      fs.writeFileSync(path.join(targetFolder, 'ic_launcher_foreground.png'), fgBuf);
    }

    // iOS AppIcon-512@2x.png (1024x1024 opaque full-bleed)
    const iosAppIcon1024 = await renderPng(svgFullBleed, 1024, 1024, '#0B0D12');
    fs.writeFileSync(path.join(iosResDir, 'AppIcon-512@2x.png'), iosAppIcon1024);

    console.log('✓ Todos os ícones e Open Graph Image gerados com sucesso!');
    app.quit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
