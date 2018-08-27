// ## HTTP UPPERCASERER (Exercise 12 of 13)

// Write an HTTP server that receives only POST requests and converts
// incoming POST body characters to upper-case and returns it to the client.

// Your server should listen on the port provided by the first argument to
// your program.

const http = require('http');
const port = process.argv[2] || 8000;

http.createServer((request, response) => {
    if (request.method === 'POST') {
        // TO DO
        let data = "";
        request.on('data', (chunk) => {
            data += chunk;
        });
        request.on('end', () => {
            let bodyUppercase = data.toUpperCase();
            console.log(bodyUppercase);
            response.end(bodyUppercase);
        })
    }

}).listen(port);

console.log(`Server listening on port ${port}`);