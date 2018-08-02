var http = require('http');

http.createServer(function(req,res){
    res.writeHead(404);//404에러이지만, 서버가 종료되지 않음.
    res.end();
}).listen(9999,function(){
    console.log('Server running at http://127:0.0.1:9999/');
});
