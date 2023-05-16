var fs = require('fs')
var text = "Bye Purav";
fs.readFile('.demo1.txt',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data.toString())
})
fs.writeFile('.demo1.txt', text ,(err)=>{
    if(err){
        throw err;
    }
    console.log("File written sucessfully")
}).listen(2000, ()=>{
    console.log("Server is running on port 2000")
})
fs.unlink("./demo1.txt", (err)=>{
    if(err){
        throw err
    }
    console.log("File deleted successfully")
})
