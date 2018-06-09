const electron = require('electron');
const remote = require('electron').remote;
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;


let mainWindow;


// Listen for the app to be ready before calling this method.
app.on('ready', function() {
    // Create new window
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        frame: false
    });
    // Load html file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'main.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Build menu template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

// Menu template that will be used.
const mainMenuTemplate = [
    // Mac requires an empty space
    {},
    {
        label: 'File',
        submenu: [
            {
                label: 'Settings'
            }
        ]
    },
    {
        label: 'hello'
    }
]
