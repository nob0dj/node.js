var http =  require('http');
var fs = require('fs');
var querystring = require('querystring');

http.createServer(function(req,res){
    if(req.method=='GET'){
        //GET요청
        fs.readFile('form.html',(err,data)=>{
            res.writeHead(200,{
                'Content-Type':'text/html'
            });
            res.end(data);
        });
    }
    else if(req.method=='POST'){
        //POST요청 : data이벤트핸들러
        req.on('data',(data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});

            //data.toString() => serialized형태로 출력됨.
            //querystring.parse(data.toString()) => 반드시 data.toString()을 전달할것.
            res.end("<h1>"+data+"</h1><h1>"+JSON.stringify(querystring.parse(data.toString()))+"</h1>");//serialized형태로 출력됨.
            console.log(decodeURIComponent(data.toString()));//인코딩된 한글데이터가 다시 한글로 정상출력
            console.log(JSON.stringify(data));
            
        });
        

    }
}).listen(9999,() => {
    console.log('Server running at http://127:0.0.1:9999/');
});

/*
//post방식 quertystring접근
data.toString() => data_a=%EA%B9%80%EB%8F%99%ED%98%84&data_b=abc
JSON.stringify(data) => {"type":"Buffer","data":[100,97,116,97,95,97,61,37,69,65,37,66,57,37,56,48,37,69,66,37,56,70,37,57,57,37,69,68,37,57,56,37,56,52,38,100,97,116,97,95,98,61,97,98,99]}
JSON.stringify(querystring.parse(data.toString())) => {"data_a":"김동현","data_b":"ddd"}

//크롬브라우져는 encoding이 auto-detection으로 변경됨. Set Character Encoding extension을 이용하여, default page encoding값을 UTF-8으로 변경후 정상출력됨.

*/