var fs= require('fs')
var http = require("http")

http.createServer(function(req, res){
    fs.readFile('D:\documents\Desktop\WE\expt5.html', (err,data)=>{
        if(err){
            throw err
        }
        res.writeHead(200, {'Content-type':'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(2000, ()=> {console.log("Server running on port 3000")})