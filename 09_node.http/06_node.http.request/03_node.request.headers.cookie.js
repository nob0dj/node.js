var http = require('http');

http.createServer(function(req,res){
    //쿠키존재여부에 따른 분기
    if(req.headers.cookie){
        //쿠키추출 : req.headers.cookie는 하나의 문자열임.
        var cookie = req.headers.cookie.split(';').map(elem=>{
            var temp = elem.split('=');
            return {
                key:temp[0],
                value:temp[1]
            }
        });
        console.dir(cookie);
        /*
            [ { key: 'name', value: 'nobodj' },
            { key: ' region', value: 'Seoul' } ]
            [ { key: 'name', value: 'nobodj' },
            { key: ' region', value: 'Seoul' } ]
        */  
        res.end("<h1>"+JSON.stringify(cookie)+"</h1>")
    }
    else{
        //expire date설정
        var d = new Date();
        d.setDate(d.getDate()+7);

        //쿠키생성
        res.writeHead(200,{
            'Content-Type':'text/html',
            'Set-Cookie':['name=nobodj;Expires='+d,'region=Seoul;Expires='+d]
        });
        //응답
        res.end('<h1>쿠키를 생성했습니다.</h1>');


    }


}).listen(9999,function(){
    console.log('Server running at http://127:0.0.1:9999/');
});