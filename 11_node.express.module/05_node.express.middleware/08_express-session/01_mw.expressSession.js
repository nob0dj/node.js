// 모듈을 추출합니다.
var express = require('express');
var session = require('express-session');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: true,
  cookie :{
      maxAge : 60*1000
  }
}));

app.get('/', (request, response) => { 
    //최초접속시간을 session에 저장함.
    var start = request.session.start;
    if(!start) start = request.session.start = new Date().toLocaleString();
    console.log(start);

    response.send(request.session);
});

app.get('/a', (request, response) => {
    //최초접속시간을 session에 저장함.
    var start = request.session.start;
    if(!start) start = request.session.start = new Date().toLocaleString();
    console.log(start);

    response.send(request.session);
});

//세션제거
app.get('/destroy', (request, response) => {

    request.session.destroy();

    response.redirect("/");

});

// 서버를 실행합니다.
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});