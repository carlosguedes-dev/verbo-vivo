const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('verboVivoNative', {
  platform: 'windows',
  version: '3.0.0',
  readBibleJson: (translation) => ipcRenderer.invoke('verbo-vivo:read-bible-json', translation)
});
