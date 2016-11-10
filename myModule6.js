var fs = require('fs')
var path = require('path')

module.exports = function (dir, extension, callback) {
	var myFilter = '.' + extension
		
	fs.readdir(dir, function (err, list) {
		if (err) {
			return callback(err)
		}
		
		list = list.filter(function (file) {
			return path.extname(file) === myFilter
		})

		callback(null, list)
	})	
}
