const { app, BrowserWindow } = require('electron');
const path = require('path')

const isDev = !app.isPackaged;

const createWindow = () => {
  const win = new BrowserWindow({
     height: 720, width: 1280
  })
  win.removeMenu(); 
  win.loadFile(path.join(__dirname,'./ui/login.html'))
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