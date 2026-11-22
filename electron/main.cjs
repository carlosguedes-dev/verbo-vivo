const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('node:path');
const fs = require('node:fs');

function createMainWindow() {
  const iconPath = path.join(__dirname, process.platform === 'win32' ? 'icon.ico' : 'icon.png');
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 420,
    minHeight: 560,
    title: 'Verbo Vivo — Bíblia Sagrada, Dicionário Bíblico & Refúgio',
    icon: fs.existsSync(iconPath) ? iconPath : undefined,
    backgroundColor: '#111317',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webviewTag: false
    }
  });

  win.setMenuBarVisibility(false);

  const appIndex = path.join(__dirname, '..', 'dist-app', 'index.html');
  const fallbackIndex = path.join(__dirname, '..', 'dist', 'app.html');
  const targetFile = fs.existsSync(appIndex) ? appIndex : fallbackIndex;

  win.loadFile(targetFile);

  win.webContents.on('will-navigate', (event, navigationUrl) => {
    if (!navigationUrl.startsWith('file://')) {
      event.preventDefault();
      if (navigationUrl.startsWith('https://')) {
        shell.openExternal(navigationUrl);
      }
    }
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });
}

ipcMain.handle('verbo-vivo:read-bible-json', async (_event, translation) => {
  const allowed = ['acf', 'nvi', 'aa'];
  if (!allowed.includes(translation)) {
    throw new Error('Tradução inválida');
  }
  const candidates = [
    path.join(__dirname, '..', 'dist-app', 'data', `${translation}.json`),
    path.join(__dirname, '..', 'dist', 'data', `${translation}.json`),
    path.join(__dirname, '..', 'public', 'data', `${translation}.json`)
  ];
  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(raw);
    }
  }
  throw new Error(`Arquivo ${translation}.json não encontrado`);
});

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
