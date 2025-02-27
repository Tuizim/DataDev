const { contextBridge, ipcRenderer} = require('electron');

const securityApi= {
    getRandomLocation: ()=> ipcRenderer.invoke('get-random-location'),
    copyToClipboard: (text)=> ipcRenderer.invoke('copy-to-clipboard',text)
}

contextBridge.exposeInMainWorld('api',securityApi)