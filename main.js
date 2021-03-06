const { app, BrowserWindow } = require('electron');
const path = require('path');
const server = require('./bin/www');



function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js')
            contextIsolation: true,
            devTools: true,
            webSecurity: false
        }
    });

    // mainWindow.setFullScreen(true);
    mainWindow.setMenuBarVisibility(false);
    
    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:8000/admin/');
    
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()
    
    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});