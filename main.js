

var menubar = require('menubar')
var mb = menubar({
    preloadObject: true
})

mb.on('ready', function ready() {
  console.log('app is ready')
})

exports.mbar = () => {
		alert("Quit function selectered")
		mb.app.quit()

}
