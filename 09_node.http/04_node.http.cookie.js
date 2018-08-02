var http = require('http');

http.createServer(function(req,res){
    //expire date설정
    var d = new Date();
    d.setDate(d.getDate()+7);

    console.log(d.toString());//Wed Aug 08 2018 00:58:25 GMT+0900 (KST)
    console.log(d.toUTCString());//Tue, 07 Aug 2018 15:58:25 GMT => UTC timezone 우리나라 표준시보다 9시간 느림.

    //cookie설정
    res.writeHead(200, {
        'Content-Type':'text/html',
        'Set-Cookie':[
            'breakfast=toast;Expires='+d.toUTCString(),//Tue, 07 Aug 2018 15:52:12 GMT => UTC timezone의 시각반납
            'dinner=chicken'
        ]
    });

    //쿠키를 본문에 출력
    res.end('<h1>'+req.headers.cookie+'</h1>')

}).listen(9999, function(){
    console.log('Server running at http://127:0.0.1:9999/');
});