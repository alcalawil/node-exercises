var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

var str = buf.toString()
 
console.log (str)

var array = str.split('\n')

console.log (array.length)
