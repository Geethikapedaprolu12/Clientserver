var http = reqiure('http')
var options={
    hostname : '127.0.0.1',
    port : 3000,
    method : 'POST'
}

var req = http.request(options,function(req,res){
    str =""
    Response.on('data',function(chunk){
        str += chunk;
    })
    Response.on('data',function(){
        console.log(str)
    })
})

req.on('error',error=>
console.error(error)
)

req.end()