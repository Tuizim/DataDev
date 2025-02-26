const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        resizable: false,
        icon: path.join(__dirname,'..','assets', 'ico.png'),
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: true,
          }
    });
    mainWindow.menuBarVisible = false;
    mainWindow.loadURL(path.join(__dirname,'..', "renderer",'index', 'index.html'));
});