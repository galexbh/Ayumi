const { app, BrowserWindow } = require('electron');
const path = require('path')

const isDev = !app.isPackaged;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 960
  })
  win.removeMenu(); 
  win.loadFile(path.join(__dirname,'./ui/register.html'))
  if (isDev) win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})