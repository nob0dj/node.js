var http = require('http');

http.createServer(function(req,res){
    res.writeHead(302,{
        'Location':'https://iei.or.kr'
    });
    res.end();
}).listen(9999,function(){
    console.log('Server running at http://127:0.0.1:9999/');
});