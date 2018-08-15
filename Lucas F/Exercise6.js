var mymodule = require('./mymodule')
var directory = process.argv[2]
var filter    = process.argv[3]

function log(err, fileList){
    for (var i = 0; i < fileList.length; i++) {
    console.log(fileList[i])
    }
  }

mymodule(directory, filter, log)