

var menubar = require('menubar')

var mb = menubar()

mb.on('ready', function ready() {
  console.log('app is ready')
})

exports.mbar = () => {
		alert("quit")
		mb.app.quit()

}
