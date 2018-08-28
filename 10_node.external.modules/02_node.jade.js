var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer((req, res)=>{
    //jade파일읽기
    fs.readFile('02_html.jade', 'utf-8', (err,data)=>{
        //jade모듈의 copile메소드 jade문자열을 html로 변환할 수 있는 함수리턴
        var fn = jade.compile(data);
        res.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});//한글깨짐 방지로 charset=UTF-8 옵션 추가
        //fn함수호출을 통해 html로 출력
        res.end(fn());
    });

}).listen(9999, ()=>{
   console.log("Server Running at http://127.0.0.1:9999"); 
});