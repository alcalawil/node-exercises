var fs = require('fs')
var array

function readFile(callback) {
    fs.readFile(process.argv[2], function read(err, data) {
        var buf = data
        var string = buf.toString()
        array = string.split('\n')
        callback()
    });
  }

  function log(){
    console.log(array.length-1)
  }

  readFile(log)

  