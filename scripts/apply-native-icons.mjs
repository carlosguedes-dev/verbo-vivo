import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
const appVersion = pkg.version || '3.0.0';
const [major = 3, minor = 0, patch = 0] = appVersion.split('.').map((n) => parseInt(n, 10) || 0);
const versionCode = major * 100 + minor * 10 + patch;

const nativeIconsDir = path.join(rootDir, 'resources', 'native-icons');

// 1. Aplicar ícones nativos e versão no Android (se a pasta android/ existir)
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

  // Atualizar cor de fundo do Adaptive Icon para #111317
  const bgXmlPath = path.join(androidResTarget, 'values', 'ic_launcher_background.xml');
  if (fs.existsSync(path.dirname(bgXmlPath))) {
    const bgXml = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="ic_launcher_background">#111317</color>
</resources>
`;
    fs.writeFileSync(bgXmlPath, bgXml, 'utf8');
  }

  // Sincronizar versionCode e versionName em android/app/build.gradle
  const gradlePath = path.join(rootDir, 'android', 'app', 'build.gradle');
  if (fs.existsSync(gradlePath)) {
    let gradle = fs.readFileSync(gradlePath, 'utf8');
    gradle = gradle.replace(/versionCode\s+\d+/, `versionCode ${versionCode}`);
    gradle = gradle.replace(/versionName\s+"[^"]+"/, `versionName "${appVersion}"`);
    fs.writeFileSync(gradlePath, gradle, 'utf8');
  }

  console.log(`✓ Ícones e versão Android (${appVersion} / code ${versionCode}) aplicados com sucesso.`);
}

// 2. Aplicar ícone nativo e versão no iOS (se a pasta ios/ existir)
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

  const pbxprojPath = path.join(rootDir, 'ios', 'App', 'App.xcodeproj', 'project.pbxproj');
  if (fs.existsSync(pbxprojPath)) {
    let pbx = fs.readFileSync(pbxprojPath, 'utf8');
    pbx = pbx.replace(/MARKETING_VERSION = [^;]+;/g, `MARKETING_VERSION = ${appVersion};`);
    pbx = pbx.replace(/CURRENT_PROJECT_VERSION = [^;]+;/g, `CURRENT_PROJECT_VERSION = ${versionCode};`);
    fs.writeFileSync(pbxprojPath, pbx, 'utf8');
  }

  console.log(`✓ Ícone e versão iOS (${appVersion} / build ${versionCode}) aplicados com sucesso.`);
}
