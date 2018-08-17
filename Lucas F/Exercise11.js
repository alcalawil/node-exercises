const http = require('http')
const fs   = require('fs');
let port = process.argv[2]


let server = http.createServer(function (req, res) {
    fs.createReadStream(process.argv[3]).pipe(res)
  })
  server.listen(port)