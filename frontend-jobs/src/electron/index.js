const { app, BrowserWindow, dialog } = require('electron');
const watch = require('./watch');
const files = require('./files');

app.on('ready', () => {
  const win = new BrowserWindow({ width: 1024, height: 800 });

  win.loadURL(`file://${__dirname}/../../build/index.html`);
  win.webContents.on('did-finish-load', () => {

    async function sendFile(path) {
      const file = files.read(path);
      if (file.type !== 'application/pdf' ||
          file.size > 2097152) return;

      win.webContents.send('file', file);
    }

    dialog.showOpenDialog({ properties: ['openDirectory'] }, path => {
      //win.webContents.openDevTools();
      if (!path) return;
      watch({ path, onAdd: sendFile });
    });
  });
});
