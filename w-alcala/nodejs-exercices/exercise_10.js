
//  ## TIME SERVER (Exercise 10 of 13)

//  Write a TCP time server!

//  Your server should listen to TCP connections on the port provided by the
//  first argument to your program. For each connection you must write the
//  current date & 24 hour time in the format:

//     "YYYY-MM-DD hh:mm"

//  followed by a newline character. Month, day, hour and minute must be
//  zero-filled to 2 integers. For example:

//     "2013-07-06 17:42"

//  After sending the string, close the connection.

const net = require('net');
const PORT = process.argv[2];

let server = net.createServer((socket) => {
    let timeServer = getServerTime();
    socket.write(timeServer)
    socket.end();
});

const getServerTime = () => {
    let serverTime = null;
    let now = new Date()
    let dateSeparated = now.toISOString().split('T');
    let date = dateSeparated[0];
    let time = now.toLocaleTimeString();
    let timeSeparated = time.split(':');
    let HH = timeSeparated[0];
    let MM = timeSeparated[1];
    serverTime = `${date} ${HH}:${MM}\n`;    
    return serverTime;
};

console.log(getServerTime());

server.listen(PORT);
console.log(`Socket listen on port: ${PORT}`);
