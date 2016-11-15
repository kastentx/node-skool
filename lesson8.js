var http = require('http')
var passedUrl = process.argv[2]

var allChars = ""

http.get(passedUrl, function(res) {
	res.setEncoding("utf8")
	.on('data', function(chunk) {
		allChars += chunk
	})
	.on('end', function() {
		console.log(allChars.toString().length)
		console.log(allChars)
	})
}).on('error', function(e) {
	console.log("got error: " + e.message)
})
