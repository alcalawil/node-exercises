const fs = require('fs')
const array = new Array;


module.exports = function Example5(directory, extention, callback) {
    fs.readdir(directory,'utf8', function (err, list) {
        if (err) return callback(err)
        for (let index = 0; index < list.length; index++) {
            let theString = "." + extention;
            if (list[index].indexOf(theString) >= 0) {
                array.push(list[index])
               // console.log(list[index])
            }
        }

        callback(err, array)
    })
}