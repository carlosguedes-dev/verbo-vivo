const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('node:path');
const fs = require('node:fs');

function createMainWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 900,
    minHeight: 640,
    title: 'Verbo Vivo — Bíblia Sagrada, Tira-Dúvidas & Vida Cristã',
    backgroundColor: '#0b0d12',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  win.setMenuBarVisibility(false);

  const appIndex = path.join(__dirname, '..', 'dist-app', 'index.html');
  const fallbackIndex = path.join(__dirname, '..', 'dist', 'app.html');
  const targetFile = fs.existsSync(appIndex) ? appIndex : fallbackIndex;

  win.loadFile(targetFile);

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://') || url.startsWith('http://')) {
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
