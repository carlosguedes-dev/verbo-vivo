const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('verboVivoNative', {
  platform: 'windows',
  version: '4.0.1',
  readBibleJson: (translation) => ipcRenderer.invoke('verbo-vivo:read-bible-json', translation)
});
