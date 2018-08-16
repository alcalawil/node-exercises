const bl = require('bl')
var http = require('http')
var url = process.argv[2]

http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            throw error
        }
        let string = data.toString()
        console.log(data.length)
        console.log(string)
    }))
})