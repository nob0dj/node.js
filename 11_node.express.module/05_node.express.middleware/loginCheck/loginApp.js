var fs = require('fs');
var express =  require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jade = require('jade');
var DummyDB = require('./DummyDB.js').DummyDB;//export객체에 담긴 DummyDB객체

//console.log("DummyDB="+DummyDB);//{ DummyDB: { loginCheck: [Function], get: [Function] } }


//서버생성
var app = express();

//미들웨어 설정
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
    secret : "secret key",
    resave : false,
    saveUninitialized : true
}));


//라우터설정
app.get('/',(request,response)=>{
    console.log("GET : /");
    //jade파일을 읽기
    fs.readFile('index.jade', 'utf-8', (err,data)=>{
        //jade모듈의 copile메소드 jade문자열을 html로 변환할 수 있는 함수리턴
        var fn = jade.compile(data);
        response.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});//한글깨짐 방지로 charset=UTF-8 옵션 추가
        
        var user = request.session.user;
        var userInfo;
        if(user) userInfo = user.name;
        else userInfo = "로그인하세요";

        //fn함수호출을 통해 html로 출력
        response.end(fn({
            user : userInfo
        }));
    });
});
//1.login페이지요청
app.get('/login',(request,response)=>{
    console.log("GET : /login");
    fs.readFile('login.html',(error,data)=>{
        // console.log(data);//<Buffer ef bb bf 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 3e 0d 0a 3c 68 65 61 64 3e 0d 0a 20 20 3c 74 69 74 6c 65 3e 4c 6f 67 69 6e ... >
        // console.log(data.toString());//html
        
        //data의 타입이 Buffer이므로, Content-Type : application/octet-stream 으로 자동지정된다.
        //Content-Type:text/html로 오버라이딩함.
        response.set('Content-Type', 'text/html');
        response.send(data.toString());
    });
});
//2.login요청
app.post('/login',(request,response)=>{
    console.log("POST : /login");
    //post방식 파라미터추출
    var id = request.body.id;
    var password = request.body.password;

    //출력
    console.log(id,password);
    console.log(request.body);

    var result = DummyDB.loginCheck(id,password);
    console.log("result="+result);

    //result값에 따른 분기
    if(result == 1){
        request.session.user=DummyDB.get(id);
        response.redirect('/');
    }
    else if(result == 0){
        // response.set('Content-Type', 'text/html');
        // response.send('<script>alert("비밀번호가 틀렸습니다.);</script>');
        response.redirect('/login');
    }
    else {
        // response.set('Content-Type', 'text/html');
        // response.send('<script>alert("존재하지 않는 아이디입니다.);</script>');
        response.redirect('/login');
    }
});

//서버실행
var port = 52273;
app.listen(port, ()=>{
    console.log("Server running at http://127.0.0.1:"+port);
});


