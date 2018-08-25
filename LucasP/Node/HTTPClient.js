var http = require ('http')

http.get(process.argv[2],function(callHttp){
    callHttp.setEncoding('utf8')
    callHttp.on('data',function(data){
        console.log(data)
    })
})