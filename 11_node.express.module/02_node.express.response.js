// 모듈을 추출합니다.
var express = require('express');

// 서버를 생성합니다.
var app = express();

// request 이벤트 리스너를 설정합니다.
app.use((request, response) => {
  // 데이터를 생성합니다.
  var output = [];
  for (var i = 0; i < 3; i++) {
    output.push({
      count: i,
      name: 'name - ' + i
    });
  }

  // 응답합니다 : output이 배열이므로, json타입으로 전송
  // response.send(output);

  //[[2]] : status code 추가
  // response.status(404).send('<h1>NotFoundError</h1>');

  //[[3]] : 상태코드만 전달하기 
  response.sendStatus(404);//에러
  // response.status(404).send('Not Found')

});

// 서버를 실행합니다.
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});


