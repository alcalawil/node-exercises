var fs = require('fs')

function Example4()
{
    fs.readFile(process.argv[2],{encoding:'utf8'},function doneReading(err, fileContents)
    {
        var array=fileContents.split('\n')
        var myNumber=array.length-1
        console.log(myNumber)
    })
}
  
Example4()