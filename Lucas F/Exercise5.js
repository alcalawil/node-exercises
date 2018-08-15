var fs = require('fs')
var fileList = new Array 
var filter = process.argv[3]

function findFiles(callback){
    fs.readdir(process.argv[2], 'utf8', function readOk(err, Files) {
        
        for (var i = 0; i < Files.length; i++) {
        var extension = Files[i].endsWith('.' + filter)
            if(extension == true){
                fileList.push (Files[i])
            }
        }
        callback()
    });
}

function log(){
    for (var i = 0; i < fileList.length; i++) {
    console.log(fileList[i])
    }
  }

findFiles(log)
