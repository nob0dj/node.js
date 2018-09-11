// ����� �����մϴ�.
var express = require('express');

// ������ �����մϴ�.
var app = express();

// �̵��� �����մϴ�.
app.use(express.static(__dirname + '/public'));
app.use((request, response) => {
  // �����մϴ�.
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<img src="/img/hyunta.jpg" width="100%" />');
});

// ������ �����մϴ�.
app.listen(52273, () =>  {
  console.log('Server running at http://127.0.0.1:52273');
});