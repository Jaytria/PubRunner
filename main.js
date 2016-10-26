//Reqire Statments
const {app, Tray, Menu, BrowserWindow} = require('electron');
const path = require('path');
const storage = require('electron-json-storage');

//Deal with icons and windows on startup
const iconPath = path.join(__dirname, 'imgs/menu_ico/IconTemplate.png');
let appIcon = null;
let win = null;

app.on('ready', function(){
  win = new BrowserWindow({show: false});
  appIcon = new Tray(iconPath);

	console.log('app is ready')

//Menubar Structure
  var contextMenu = Menu.buildFromTemplate([
    {
      label: 'Add Script...',
			click: function(){

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
        win.show();
        win.toggleDevTools();
      }
    },
    { label: 'Quit',
      accelerator: 'Command+Q',
      selector: 'terminate:',
    }
  ]);
  appIcon.setToolTip('This is my application.');
  appIcon.setContextMenu(contextMenu);
});

//helper functions

function check_key(key){

}
