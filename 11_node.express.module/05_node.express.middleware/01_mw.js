// 모듈을 추출합니다.
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 미들웨어 설정(1)
app.use((request, response, next)=>{
  console.log("첫 번째 미들웨어");
  //데이터추가
  request.number = 9999;
  next();
});

// 미들웨어 설정(2)
app.use((request, response, next)=>{
  console.log("두 번째 미들웨어");
  //데이터추가
  response.name = '김동현';
  next();
});

// 미들웨어 설정(3)
app.use((request, response, next)=>{
  console.log("세 번째 미들웨어");
  // 응답합니다.
  response.send('<h1>'+request.number+', '+response.name+'</h1>')

});

// 서버를 실행합니다.
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});