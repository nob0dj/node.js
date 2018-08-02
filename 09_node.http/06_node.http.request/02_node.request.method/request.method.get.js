var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    //GET방식의 queryString추출은 url객체의 parse메소드를 이용함.
    //두번째 파라미터는 query string의 parse여부임. t:js obj리턴, f:string
    var qs = url.parse(req.url, true).query;

    //전달받은 query string 출력
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("<h1>"+JSON.stringify(qs)+"</h1>");

}).listen(9999,function(){
    console.log('Server running at http://127:0.0.1:9999/');
});