// 모듈을 추출합니다.
var fs = require('fs');
var ejs = require('ejs');
var express = require('express');
var bodyParser = require('body-parser');

//mongodb관련
var mongojs = require('mongojs');
var db = mongojs('node',['products']);

// 서버를 생성합니다.
var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));

// 서버를 실행합니다.
app.listen(52273, () => {
  console.log('server running at http://127.0.0.1:52273');
});

// 라우트를 수행합니다.
app.get('/', (request, response) => {
  // 파일을 읽습니다.
  fs.readFile('list.html', 'utf8', (error, data) => {
    // 데이터베이스 쿼리를 실행합니다.
    db.products.find((error, result)=>{
        //console.log(result)

      // 응답합니다.
      // ejs.render메소드의 첫번째 인자는 list.html을 읽어온 데이터 data이고, 
      //두번째 인자는 여기에 전달한 db데이터이다.
      response.send(ejs.render(data, {
        data: result
      }));
    });
  });
});

app.get('/insert', (request, response) => {
  // 파일을 읽습니다.
  fs.readFile('insert.html', 'utf8', (error, data) => {
    // 응답합니다.
    response.send(data);
  });
});

app.post('/insert', (request, response) => {
  // 변수를 선언합니다.
  var body = request.body;

  // 데이터베이스 쿼리를 실행합니다.
  db.products.save({
      id:body.id,
      name :body.name,
      price : body.price
  });

  response.redirect('/');
});

app.get('/edit/:id', (request, response)=>{
//   console.log("request.params.id=",request.params.id);

  // 파일을 읽습니다.
  fs.readFile('edit.html', 'utf8',(error, data) => {
     // 데이터베이스 쿼리를 실행합니다.
     db.products.findOne({
        id : request.params.id
     },(error, docs)=>{
        //console.log(docs)

      // 응답합니다.
      // ejs.render메소드의 첫번째 인자는 list.html을 읽어온 데이터 data이고, 
      //두번째 인자는 여기에 전달한 db데이터이다.
      response.send(ejs.render(data, {
        data: docs
      }));
    });
  });
});

app.post('/edit/:id', function (request, response) {
  // 변수를 선언합니다.
  var body = request.body;
  
  var temp = {
    _id: mongojs.ObjectId(body._id),//document의 고유값을 나타내는 _id는 이와같이 호출해야함. 그렇지 않으면 별개의 document로 인지함.
    id:body.id,
    name : body.name,
    price : body.price
  }
  console.log(temp);
  // 데이터베이스 쿼리를 실행합니다.
  db.products.save(temp);

  // 응답합니다.
  response.redirect('/');
});

app.get('/delete/:id', (request, response) => {
  var del_id = request.params.id;

  // 데이터베이스 쿼리를 실행합니다.
  db.products.remove({id:del_id});

  // 응답합니다.
  response.redirect('/');
});





