var http=require('http')
var fs=require('fs')

var port=process.argv[2]
var fileN=process.argv[3]

var server=http.createServer((req,res)=>{
   
    fs.createReadStream(fileN).pipe(res)

    // read.on('data',(data)=>{
    //     console.log(data.toString())
    // })
    // read.on('end')
})
server.listen(port)