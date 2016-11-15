var http = require('http')
var passedUrl = process.argv[2]

http.get(passedUrl, function(res) {
	res.setEncoding("utf8")
	.on('data', function(chunk) {
	console.log(chunk)
	})
}).on('error', function(e) {
	console.log("got error: " + e.message)
})
