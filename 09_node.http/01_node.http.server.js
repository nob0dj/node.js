//http모듈 추출
var http  = require('http');
//웹서버생성
// var server = http.createServer();
var server = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>Hello world</h1>')
});


//server객체에 이벤트연결
// server.on('request', code =>{
//     console.log("request on");
// });

server.on('connection', code =>{
    console.log("connection on");
});

server.on('close', code =>{
    console.log("close on");
});


//웹서버실행
server.listen(52273);

/*
//connection이벤트가 두번호출??
    connection on
    connection on
    request on

*/