// 모듈을 추출합니다.
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(bodyParser.urlencoded({ extended: false }));

// 라우터를 설정합니다.
//1. GET 방식 : url에 작성 http://127.0.0.1:52273/?name=김동현&age=20
app.get('/', (request, response) => {
    var name = request.query.name;
    var age = request.query.age;

    var html = "<h2>GET : 전달된 매개변수</h2>";
    html += "<hr>";
    html += "<p>name="+name+"</p>";
    html += "<p>age="+age+"</p>";
    response.send(html);
});

//2.POST방식 : Postman 크롬확장프로그램 통해 요청. x-www-form-urlencoded인코딩 방식 선택할 것.
app.post('/', (request, response) => {
    var name = request.body.name;
    var age = request.body.age;

    console.log(request.body);

    var html = "<h2>BODY : 전달된 매개변수</h2>";
    html += "<hr>";
    html += "<p>name="+name+"</p>";
    html += "<p>age="+age+"</p>";
    response.send(html);
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log('Server running at http://127.0.0.1:52273');
});