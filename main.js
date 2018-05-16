const electron = require('electron');
// const remote = require('electron').remote;
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;


let mainWindow;

// Listen for the app to be ready
app.on('ready', function(){
    // Create new window
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden'
    });
    // Load html file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Build menu template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
    { },
    {
        label: 'File'
    }
]