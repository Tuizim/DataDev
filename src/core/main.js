const { app, BrowserWindow, clipboard, ipcMain } = require('electron');
const path = require('path');
let mainWindow;
const sqlite = require('sqlite3')

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        minWidth:1000,
        minHeight:700,
        resizable: true,
        fullscreenable:true,
        icon: path.join(__dirname,'..','assets', 'ico.png'),
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
          }
    });
    mainWindow.menuBarVisible = false;
    mainWindow.loadURL(path.join(__dirname,'..', "renderer",'index', 'index.html'));
});

//Banco de dados
const isDev= process.env.NODE_ENV === 'development';
const dbPath = isDev
  ? path.join(__dirname, '..', 'assets', 'db', 'enderecos.db')
  : path.join(process.resourcesPath,'app','src', 'assets', 'db', 'enderecos.db');
const db = new sqlite.Database(dbPath,(err)=>{
   if (err){
    console.error("Nao foi possivel se conectar ao banco de dados, motivo: "+err)
   }
   else{
    console.log("Conectado ao banco de dados com sucesso!")
   }
})

//conexoes com o preload
ipcMain.handle('get-random-location',async ()=>{
    return new Promise((resolve,reject)=>{
        db.get("SELECT * FROM enderecos ORDER BY RANDOM() LIMIT 1", (err, data) => {
            if (err) reject(err.message)
            else resolve(data)
        })
    })
})

ipcMain.handle('copy-to-clipboard',(event,text)=>{clipboard.writeText(text)})