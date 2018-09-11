// 모듈을 추출합니다.
var express = require('express');

// 서버를 생성합니다.
var app = express();

// 라우터를 설정합니다.
var f = (request, response) => {
    response.send('<h1>Index Page</h1>');
};
app.get('/', f).get('/index', f)

//작성된 router메소드들이 순서대로 처리도므로, 전체선택자 *의 경우, 가장 마지막에 작성해야함.
app.all('*', (request, response) => {
  response.status(404).send('<h1>ERROR - Page Not Found</h1>');
});

// 서버를 실행합니다.
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});