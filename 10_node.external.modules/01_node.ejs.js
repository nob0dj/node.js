var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

//1.ejs 맛보기
// http.createServer((req, res)=>{
//     //ejs파일읽기
//     fs.readFile('01_html.ejs', 'utf-8', (err,data)=>{
//         res.writeHead(200, {'Content-Type':'text/html'});
//         //ejs모듈의 render메소드를 통해 html로 출력
//         res.end(ejs.render(data));
//     });

// }).listen(9999, ()=>{
//    console.log("Server Running at http://127.0.0.1:9999"); 
// });


//2.데이터의 전달
http.createServer((req, res)=>{
    //ejs파일읽기
    fs.readFile('01_html.ejs', 'utf-8', (err,data)=>{
        res.writeHead(200, {'Content-Type':'text/html'});
        //ejs모듈의 render메소드를 통해 html로 출력
        res.end(ejs.render(data,{
            name : 'kh',
            description : 'GoodMorning, KH'
        }));
    });

}).listen(9999, ()=>{
   console.log("Server Running at http://127.0.0.1:9999"); 
});