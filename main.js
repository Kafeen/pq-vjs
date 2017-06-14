const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
    new BrowserWindow({width: 800, height: 600})
        .loadURL('file://' + __dirname + '/index.html');
});

app.on('window-all-closed', () => {
    app.quit();
});
