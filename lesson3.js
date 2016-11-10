var fs = require('fs')

var myArray = fs.readFileSync(process.argv[2]).toString().split('\n');

console.log(myArray.length-1);
