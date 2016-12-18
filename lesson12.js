var myPort = process.argv[2]
var map = require('through2-map')
var http = require('http')

var server = http.createServer(function(req,res) {
	if (req.method == "POST") {
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
	} else {
    res.end();
  }

}).listen(myPort)
