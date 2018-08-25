const http = require('http')
let array=  []
let count = 0;


const bl = require('bl')
const concatStream = require('concat-stream')

for (let index = 2; index <= 4; index++) 
{
     http.get(process.argv[index],(requests)=>
     {
         requests.setEncoding('utf8')
         requests.pipe(bl(function(err,data)
         {
            if (err) throw console.error()
            count++
            let newString = data.toString()
            array.push(newString)
            if(count==3)
                showAll()
         }))
    })
}

// for (let index = 2; index <= 4; index++) {
//     http.get(process.argv[index],(requests)=>{
//         requests.setEncoding('utf8')
//         requests.on('data',(data)=>{
//             array.push(data.toString());
//         })

//         requests.on('end',()=>{
//             count++

//             if(count==3)
//                 showAll()
//         })
//     })
// }

function showAll()
{
    for (let index = 0; index <= 2; index++) {
       console.log(array[index]);
    }
}