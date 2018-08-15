const example = require('./example1');
const dir = process.argv[2];
const filterExtension = process.argv[3];


let callback = (err, list) => { 
    if (err) return callback(err)
    list.forEach(element => console.log(element)) 
};

example(dir, filterExtension, callback)