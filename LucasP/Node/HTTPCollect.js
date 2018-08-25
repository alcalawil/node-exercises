const http = require('http')
const bl = require('bl')
const concatStream = require('concat-stream')
let URL = process.argv[2]

// http.get(URL, function (response) {
//     response.setEncoding('utf8')
//     response.pipe(bl(function (err, data) {
//         if (err) throw console.error();

//         let newString = data.toString()
//         console.log(data.length)
//         console.log(newString)
//     }))
// })

// http.get(URL, function (response) {
//     response.setEncoding('utf8')
//     response.pipe(concatStream(function(data){
//             console.log(data.length)
//             console.log(data)
//     }))
// })