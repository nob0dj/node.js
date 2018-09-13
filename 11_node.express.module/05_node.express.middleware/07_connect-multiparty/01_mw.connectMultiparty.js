// 모듈을 추출합니다.
var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
// app.use(multipart({ uploadDir: __dirname + '/upload' }));

// 라우터를 설정합니다.
app.get('/', (request, response) => {
  fs.readFile('fileUpload.html', (error, data) => {
    response.send(data.toString());
  });
});


app.post('/',multipart({ uploadDir: __dirname + '/upload' }), (request, response) => {
    console.log(request.body);//{ comment: 'ㅎㅎㅎ' }
    console.log(request.files);

    //파일 관련정보
    var imageFile = request.files.upFile
    console.log(imageFile.name);//originalFilename값 추출
    console.log(imageFile.path);//C:\\Users\\nobodj\\Dropbox\\Coding\\node.js\\11_node.express.module\\05_node.express.middleware\\07_connect-multiparty\\upload\\Z1JVx7Jl_ncdxP2WUJhCRsdX.png

    response.redirect("/");
});


//파일명 변경로직 적용
// app.post('/', (request, response) => {
//     // 변수를 선언합니다.
//     var comment = request.body.comment;
//     var imageFile = request.files.image;
//     if (imageFile) {
//       // 변수를 선언합니다.
//       var name = imageFile.name;
//       var path = imageFile.path;
//       var type = imageFile.type;

//       //console.log(__dirname);//루트디렉토리의 절대경로 반환

//       // 이미지 파일 확인
//       if (type.indexOf('image') != -1) {
//         // 이미지 파일의 경우: 파일 이름을 변경합니다.
//         var outputPath = __dirname + '/upload/' + Date.now() + '_' + name;
//         fs.rename(path, outputPath, (error) => {
//           response.redirect('/');
//         });
//       } else {
//         // 이미지 파일이 아닌 경우: 파일을 제거합니다.
//         fs.unlink(path, error => {
//           response.sendStatus(400);
//         });
//       }
//     } else {
//       // 파일이 없을 경우
//       response.sendStatus(404);
//     }
//   });
  

/*
request.files 객체출력 : 

{ image:
   { fieldName: 'image',
     originalFilename: 'hyunta.jpg',
     path: 'C:\\Users\\nobodj\\Dropbox\\Coding\\node.js\\11_node.express.module\\05_node.express.middleware\\07_connect-multiparty\\upload\\DrAkOeCaIztDzPC_Cgq72gNm.jpg',
     headers:
      { 'content-disposition': 'form-data; name="image"; filename="hyunta.jpg"',
        'content-type': 'image/jpeg' },
     size: 26357,
     name: 'hyunta.jpg',
     type: 'image/jpeg' } }


*/

// 서버를 실행합니다.
app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});