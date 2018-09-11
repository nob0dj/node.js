// 모듈을 추출합니다.
var express = require('express');
var cookieParser = require('cookie-parser');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(cookieParser());

// 라우터를 설정합니다.
app.get('/getCookie', (request, response) => {
  // 응답합니다.
  response.send(request.cookies);

  //사용자 요청에 담긴 쿠키속성 개별 접근
  console.log(request.cookies.str);
});
app.get('/setCookie', (request, response) => {
  
  console.log(new Date().getTime());//unix타입리턴 : 1536625086942
  console.log(new Date());///2018-09-11T00:18:06.953Z
  console.log(new Date(Date.now()));//2018-09-11T00:18:06.957Z

  // 쿠키를 생성합니다.
  response.cookie('str', 'cookie', {
    //   maxAge: 6000,//milisecon값으로 지정
      expires : new Date(Date.now()+90000),//15분 후에 페기
      httpOnly : true,//javascript를 통한 cookie객체 접근 방지
      secure : true //https환경에서만 서버로 전송

  });
  response.cookie('myobj', {
    name: 'cookie',
    property: 'delicious'
  });
  // /getCookie페이지로 리다이렉트
  response.redirect('/getCookie');
});

// 서버를 실행합니다.
app.listen(52273, () =>  {
  console.log('Server running at http://127.0.0.1:52273');
});