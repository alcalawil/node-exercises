var fs = require('fs')

function Example5()
{
    // console.log(process.argv);
    //console.log(process.argv[2]);
    fs.readdir(process.argv[2],'utf8',function readingFiles(err,list){
        for (let index = 0; index < list.length; index++)
        {
            //console.log(process.argv[3])
            // console.log(list[index])
            var theString="." + process.argv[3];
            //console.log(theString)
            // console.log(list[index].indexOf(theString))
            if(list[index].indexOf(theString)>=0)
            {
                console.log(list[index])
            }
        }   
    })
    
}
  
Example5()