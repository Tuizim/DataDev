const { contextBridge, clipboard} = require('electron');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname,'..' ,'assets', 'db', 'enderecos.db'), (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

contextBridge.exposeInMainWorld('api', {
  gerarEndereco: () => new Promise((resolve, reject) => {
    db.get("SELECT * FROM enderecos ORDER BY RANDOM() LIMIT 1", (err, row) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(row);
      }
    });
  }),
  copyText: (text) => clipboard.writeText(text)
});
