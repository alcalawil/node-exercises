var fs = require('fs')
var fileList = new Array


function findFiles(directory, filter, callback) {
    fs.readdir(directory, 'utf8', function readOk(err, Files) {

        if (err) {
            return callback(err)
        }

        for (var i = 0; i < Files.length; i++) {

            var extension = Files[i].endsWith('.' + filter)

            if (extension == true) {
                fileList.push(Files[i])
            }
        }
        callback(null, fileList)
    });
}

module.exports = findFiles


function doAlgo(error, data) {

}