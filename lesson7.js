var http = require('http')
var passedUrl = process.argv[2]

console.log(passedUrl)

http.get(passedUrl, function(res) {
	console.log("got response: " + res.statusCode)
	res.setEncoding("utf8")
	.on('data', function(chunk) {
	console.log("body: " + chunk)
	})
}).on('error', function(e) {
	console.log("got error: " + e.message)
})
