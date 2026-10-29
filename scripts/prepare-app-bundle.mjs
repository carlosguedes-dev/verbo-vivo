import fs from 'node:fs';
import path from 'node:path';

/**
 * Copia recursivamente um diretório usando fs.readdirSync e fs.copyFileSync
 * (compatível com caminhos acentuados no Windows e Linux/macOS).
 */
function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const distAppDir = path.join(rootDir, 'dist-app');

if (!fs.existsSync(distDir)) {
  throw new Error('Diretório dist/ não encontrado. Execute "npm run build" antes.');
}

if (fs.existsSync(distAppDir)) {
  fs.rmSync(distAppDir, { recursive: true, force: true });
}

copyDirRecursive(distDir, distAppDir);

const appHtmlPath = path.join(distAppDir, 'app.html');
const indexHtmlPath = path.join(distAppDir, 'index.html');

if (fs.existsSync(appHtmlPath)) {
  fs.copyFileSync(appHtmlPath, indexHtmlPath);
}

console.log('✓ Bundle nativo dist-app/ preparado com sucesso (Android, iOS e Windows).');
