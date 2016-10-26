//Reqire Statments
'use strict';
const {app, Tray, Menu, BrowserWindow} = require('electron');
const path = require('path');
const storage = require('electron-json-storage');
const testHelpers = require(path.join(__dirname, 'helpers/test-helpers.js'))

//Deal with icons and mainWindowdows on startup
const iconPath = path.join(__dirname, 'icons/IconTemplate.png');
// let appIcon = null;
let mainWindow = null;
let tray = null;

var menuOptions = {
  // show: false,
  // transparent: true,
  // frame: false,
}

var trayOptions = Menu.buildFromTemplate([
  {
    label: 'Add Script...',
    click: function(){
      console.log("This works.")
    }
  },
  {
    label: 'Item2',
    submenu: [
      { label: 'submenu1' },
      { label: 'submenu2' }
    ]
  },
  {
    label: 'Item3',
    type: 'radio',
    checked: true
  },
  {
    label: 'Toggle DevTools',
    accelerator: 'Alt+Command+I',
    click: function() {
      mainWindow.show();
      mainWindow.toggleDevTools();
    }
  },
  {
    label: 'Quit',
    accelerator: 'Command+Q',
    selector: 'terminate:',
  }
]);

app.on('ready', function() {
  tray = new Tray(iconPath);

  tray.setToolTip('This is my application.');
  tray.setContextMenu(trayOptions);

  createWindow();
});

function createWindow() {
  mainWindow = new BrowserWindow(menuOptions);
  mainWindow.loadURL(`file://${__dirname}/views/index.html`)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

function test() {
  testHelpers.log('test test test')
}

module.exports.test = test
