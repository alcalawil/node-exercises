var fs = require('fs')

function Example5(directory,extention,callback)
{
    fs.readdir(directory,extention,function (err,list){
        for (let index = 0; index < list.length; index++)
        {
            var theString="." + process.argv[3];
            if(list[index].indexOf(theString)>=0)
            {
                console.log(list[index])
            }
        }   
    })
    
}
