var http = require('http')
var url = require('url')
var myPort = process.argv[2]

var server = http.createServer(function(req, res) {
  if (req.method == 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    var urlObj = url.parse(req.url, true)
    var dateObj = new Date(urlObj.query.iso)

    if (urlObj.pathname == '/api/parsetime') {
      res.write(JSON.stringify({
        'hour': dateObj.getHours(),
        'minute': dateObj.getMinutes(),
        'second': dateObj.getSeconds()
      }))
    } else if (urlObj.pathname == '/api/unixtime') {
      res.write(JSON.stringify({
        'unixtime': dateObj.getTime()
      }))
    }
    res.end()
  } else {
    res.end()
  }
}).listen(myPort)
