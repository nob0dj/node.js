//웹서버를 만들고 실행
require('http').createServer(function (req,res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Hello World...</h1>');
}).listen(9999, function(){
	console.log('Server running at http://127:0.0.1:9999/');
});
