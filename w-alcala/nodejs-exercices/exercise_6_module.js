const fs = require('fs');

const filterDirectories = (dirName, extensionFilter, done) => {
    extensionFilter = `.${extensionFilter}`
    fs.readdir(dirName, 'utf8', (err, listOfFileNames) => {
        if (err) {
            done(err);
        } else {
            listOfFileNames = listOfFileNames.filter(fileName => fileName.indexOf(extensionFilter) > -1);
            done(null, listOfFileNames)
        }
    });
}

module.exports = filterDirectories;