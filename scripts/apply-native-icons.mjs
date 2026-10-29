import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const nativeIconsDir = path.join(rootDir, 'resources', 'native-icons');

// 1. Aplicar ícones nativos no Android (se a pasta android/ existir)
const androidResTarget = path.join(rootDir, 'android', 'app', 'src', 'main', 'res');
const androidIconsSrc = path.join(nativeIconsDir, 'android');

if (fs.existsSync(androidResTarget) && fs.existsSync(androidIconsSrc)) {
  const mipmapDirs = fs.readdirSync(androidIconsSrc, { withFileTypes: true });
  for (const entry of mipmapDirs) {
    if (entry.isDirectory()) {
      const srcDir = path.join(androidIconsSrc, entry.name);
      const destDir = path.join(androidResTarget, entry.name);
      fs.mkdirSync(destDir, { recursive: true });
      for (const file of fs.readdirSync(srcDir)) {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
      }
    }
  }

  // Atualizar cor de fundo do Adaptive Icon para #0B0D12 (Santuário Escuro)
  const bgXmlPath = path.join(androidResTarget, 'values', 'ic_launcher_background.xml');
  if (fs.existsSync(path.dirname(bgXmlPath))) {
    const bgXml = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">#0B0D12</color>
</resources>
`;
    fs.writeFileSync(bgXmlPath, bgXml, 'utf8');
  }
  console.log('✓ Ícones nativos Android (mipmap-* + adaptive icon #0B0D12) aplicados com sucesso.');
}

// 2. Aplicar ícone nativo no iOS (se a pasta ios/ existir)
const iosAppIconTarget = path.join(
  rootDir,
  'ios',
  'App',
  'App',
  'Assets.xcassets',
  'AppIcon.appiconset',
  'AppIcon-512@2x.png'
);
const iosAppIconSrc = path.join(nativeIconsDir, 'ios', 'AppIcon-512@2x.png');

if (fs.existsSync(path.dirname(iosAppIconTarget)) && fs.existsSync(iosAppIconSrc)) {
  fs.copyFileSync(iosAppIconSrc, iosAppIconTarget);
  console.log('✓ Ícone nativo iOS (AppIcon-512@2x.png 1024x1024) aplicado com sucesso.');
}
