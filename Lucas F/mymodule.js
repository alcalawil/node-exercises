var fs = require('fs')
var fileList = new Array 
var filter = process.argv[3]

module.exports = function findFiles(){
                    fs.readdir(process.argv[2], 'utf8', function readOk(err, Files) {

                        if (err){
                            console.log("ERROR")
                           return callback(err)
                        }

                        for (var i = 0; i < Files.length; i++) {

                            var extension = Files[i].endsWith('.' + filter)

                            if(extension == true){
                            fileList.push (Files[i])
                            }
                        }
                        
                        for (var i = 0; i < fileList.length; i++) {
                            console.log(fileList[i])
                            }
                    });
                }