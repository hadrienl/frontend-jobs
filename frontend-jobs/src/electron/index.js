const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  const win = new BrowserWindow({ width: 1024, height: 800 });

  win.loadURL(`file://${__dirname}/../../build/index.html`)
});
