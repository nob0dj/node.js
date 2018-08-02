//모듈추출
var fs = require('fs');
var http = require('http');

//웹서버생성
http.createServer(function(req, res){
    //html파일읽기
    fs.readFile('index.html', function(err, data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
}).listen(9999,function(){
    console.log('Server running at http://127:0.0.1:9999/');
});


//이미지파일 제공용 서버시작
http.createServer(function(req, res){
    //이미지파일열기
    fs.readFile('truckHeavyLoaded.jpg', function(err,data){
        res.writeHead(200, {'Content-Type':'image/jpeg'});
        res.end(data);
    });
}).listen(10010,function(){
    console.log('Image Server running at http://127:0.0.1:10010/');
});


//음악파일 제공용 서버시작
http.createServer(function(req, res){
    //이미지파일열기
    fs.readFile('1-03 Closer (feat. Halsey).mp3', function(err,data){
        res.writeHead(200, {'Content-Type':'audio/mp3'});
        res.end(data);
    });
}).listen(10011,function(){
    console.log('Music Server running at http://127:0.0.1:10011/');
});