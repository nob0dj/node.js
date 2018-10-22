var http = require('http');

http.createServer((req,res)=>{
    if(req.url == '/'){
        //응답
        res.write("<!DOCTYPE html>");
        res.write("<html>");
        res.write("<head>");
        res.write("<title>Forever</title>");
        res.write("</head>");
        res.write("<body>");
        res.write("<h1>Forever Test</h1>");
        res.write("</body>");
        res.write("</html>");
    }
    else{
        //오류발생
        error.error.error();
    }
    
}).listen(9999,()=>{
    console.log("Server Running at http://127.0.0.1:9999")
});