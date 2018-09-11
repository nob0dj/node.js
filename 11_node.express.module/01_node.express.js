// 모듈을 추출합니다.
var express = require('express');

// 서버를 생성합니다.
var app = express();

// request 이벤트 리스너를 설정합니다.
// 1번째 방법
// app.use((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'text/html' });
//   response.end('<h1>Hello express</h1>');
// }).listen(52273, ()=> {
//   console.log("Server Running at http://127.0.0.1:52273");
// });

//2번째 방법
//http모듈의 createServer메소드의 매개인자로 express모듈 전달
var http = require('http');
app.use((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello express</h1>');
})
http.createServer(app).listen(52273, ()=> {
    console.log("Server Running at http://127.0.0.1:52273");
  });