const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('verboVivoNative', {
  platform: 'windows',
  version: '2.0.0',
  readBibleJson: (translation) => ipcRenderer.invoke('verbo-vivo:read-bible-json', translation)
});
