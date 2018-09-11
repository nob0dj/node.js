var http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Test File2</h1>');
}).listen(9999,()=>{
    console.log("Server Running at http://127.0.0.1:9999")
});