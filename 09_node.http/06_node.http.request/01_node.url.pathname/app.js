var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
    //path parsing
    //pathname은 대소문자를 구분한다. 구분하지 않으려면, toUpperCase()|toLowerCase()를 사용하면 된다.
    var pathname = url.parse(req.url).pathname;

    if(pathname == '/'){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{
                'Content-Type':'text/html'
            });
            res.end(data);
        });
    }
    else if(pathname == '/other'){
        fs.readFile('other.html',function(err,data){
            res.writeHead(200,{
                'Content-Type':'text/html'
            });
            res.end(data);
        });
    }
}).listen(9999,function(){
    console.log('Server running at http://127:0.0.1:9999/');
});