var myPort = process.argv[2]
var net = require('net')

function padZero(value) {
	return (value > 9 ? value : "0" + value)
}

function sendDate() {
	var dateString = ""
	var myDate = new Date()
	dateString += myDate.getFullYear() + "-" 
		+ padZero(myDate.getMonth() + 1) + "-" 
		+ padZero(myDate.getDate()) + " " 
		+ padZero(myDate.getHours()) + ":" 
		+ padZero(myDate.getMinutes())
		+ "\n"
	
	return dateString.toString()
}

var server = net.createServer(function (socket) {
	// insert socket stuff here
	socket.end(sendDate())
}).listen(myPort)

