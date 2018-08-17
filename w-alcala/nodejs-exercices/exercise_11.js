
//  ## HTTP FILE SERVER (Exercise 11 of 13)

//  Write an HTTP server that serves the same text file for each request it
//  receives.

//  Your server should listen on the port provided by the first argument to
//  your program.

//  You will be provided with the location of the file to serve as the second
//  command-line argument. You must use the fs.createReadStream() method to
//  stream the file contents to the response.

const http = require('http');
const fs = require('fs');
const port = process.argv[2] || 8000;
const filePath = process.argv[3] || './testFile.txt';


http.createServer((request, response) => {
    let readStream = fs.createReadStream(filePath);
    readStream.on('open', () => {
        readStream.pipe(response);
    });
    readStream.on('error', (err) => {
        response.statusCode = 500;
        response.end(err.message);
    });
}).listen(port);

console.log(`Server listening on port ${port}`);


