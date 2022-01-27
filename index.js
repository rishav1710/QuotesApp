const fs=require("fs");
const http=require("http");
const server=http.createServer((req,res)=>{
    const rstream=fs.createReadStream("index.html");
    rstream.pipe(res);
})

server.listen(3000,"localhost",()=>{
    console.log("Running at port number 3000");
})