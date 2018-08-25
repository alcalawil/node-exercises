const net = require('net')
var today = new Date();
let port = process.argv[2]

let server = net.createServer((socket)=>{
    socket.write(getDate()+'\n')
    socket.end()
})
server.listen(port)


function getDate()
{
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var m = today.getMinutes();
    
    if(dd<10)
        dd = '0'+dd
    
    if(mm<10)
        mm = '0'+mm
    if(hh<10)
        hh = '0'+hh
    if(m<10)
        m = '0'+m

    today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + m;

    return today
}