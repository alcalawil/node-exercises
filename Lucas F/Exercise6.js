var mymodule = require('./mymodule')
const directory = process.argv[2]
const filter = process.argv[3]

function log(err, fileList) {
    if (err) {
        console.log(err);        
    }
    for (var i = 0; i < fileList.length; i++) {
        console.log(fileList[i])
    }
}

mymodule(directory, filter, log)