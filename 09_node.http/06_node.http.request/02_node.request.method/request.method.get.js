var http = require('http');
var url = require('url');

http.createServer((req,res)=>{
    //GET방식의 queryString추출은 url객체의 parse메소드를 이용함.
    //두번째 파라미터는 query string의 parse여부임. t:js obj리턴, f:string
    var qs = url.parse(req.url, true).query;

    console.log(url.parse(req.url).pathname);
    console.log(qs);//url.parse메소드에의 parse여부에 따라 true:자바스크립트객체, false:문자열이 리턴됨.

    //파라미터 name 에 대한 접근 : 복잡하다. express에서는 쉬운데....
    console.log(url.parse(req.url, true).query.name);//김동현

    //전달받은 query string 출력
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("<h1>"+JSON.stringify(qs)+"</h1>");

}).listen(9999,()=>{
    console.log('Server running at http://127:0.0.1:9999/');
});