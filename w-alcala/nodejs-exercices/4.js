// ## MY FIRST ASYNC I/O! (Exercise 4 of 13)

// Write a program that uses a single asynchronous filesystem operation to
// read a file and print the number of newlines it contains to the console
// (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first
// command-line argument.


const fs = require('fs');
const path = process.argv[2];
fs.readFile(path, 'utf8', (err, file) => {
    if(err) throw err;
    let arrayOfLines = file.split('\n');
    let countOfLines = arrayOfLines.length;
    let newLineCounts = countOfLines - 1;
    console.log(newLineCounts);
});



