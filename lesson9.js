var http = require('http')
var urls = process.argv.slice(2)

function getUrlData(urls) {
	if (!urls.length) {
		return 
	}

	http.get(urls[0], function(res) {
		var urlData = ""
		res.setEncoding("utf8")
			.on('data', function(chunk) {
			urlData += chunk
			})
			.on('end', function() {
				console.log(urlData)
				getUrlData(urls.slice(1))
			})
	})
}

getUrlData(urls)
