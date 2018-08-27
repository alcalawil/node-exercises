// ## JUGGLING ASYNC (Exercise 9 of 13)

// This problem is the same as the previous problem (HTTP COLLECT) in that
// you need to use http.get(). However, this time you will be provided with
// three URLs as the first three command-line arguments.

// You must collect the complete content provided to you by each of the URLs
// and print it to the console (stdout). You don't need to print out the
// length, just the data as a String; one line per URL. The catch is that you
// must print them out in the same order as the URLs are provided to you as
// command-line arguments.

const http = require('http');
const bl = require('bl');
const ARGUMENTS = process.argv;
let responses = [];
let counOfResponses = 0;


function main() {
    let urls = getUrls();
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        doRequest(url, i);
    }
}


const doRequest = (url, indexOfUrl) => {
    http.get(url, (response) => {
        response.setEncoding('utf8');
        response.pipe(bl((err, data) => {
            if (err) throw err
            let dataString = data.toString();
            responses[indexOfUrl] = dataString;
            counOfResponses++;
            if (counOfResponses === 3) printResponses();
        }));
    });
}

const getUrls = () => {
    let urls = [];
    for (let i = 2; i < ARGUMENTS.length; i++) {
        urls.push(ARGUMENTS[i]);
    }
    return urls;
}

const printResponses = () => {
    responses.forEach(res => console.log(res))
}

main();

