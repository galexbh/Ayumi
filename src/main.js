const { app, BrowserWindow } = require('electron');
const { join } = require('path');

const isDev = !app.isPackaged;
app.whenReady().then(main);

function main() {
  const window = new BrowserWindow({
    with: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    },
  });

  window.loadFile(join(__dirname, './ui/login.html'));
  window.on('ready-to-show', window.show);

  if (isDev) window.webContents.openDevTools();
}

module.exports = {
    main
}