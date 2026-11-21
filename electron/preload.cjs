const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('verboVivoNative', {
  platform: 'windows',
  version: '3.2.1',
  readBibleJson: (translation) => ipcRenderer.invoke('verbo-vivo:read-bible-json', translation)
});
