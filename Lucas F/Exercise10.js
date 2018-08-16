let net = require ("net")
let date = new Date()
const port = process.argv[2]

let server = net.createServer(function (socket) {
  let day  = date.getDate()
  let month = date.getMonth()+1
  let year = date.getFullYear()
  let hour = date.getHours()
  let minute = date.getMinutes()
  if (month.length = 1) month = '0' + month
  let fullDate =  `${year}-${month}-${day} ${hour}:${minute}`
  socket.write(fullDate + "\n")
  socket.end()
})

server.listen(port)
