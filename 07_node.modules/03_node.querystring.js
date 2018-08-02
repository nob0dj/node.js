var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse("http://www.hanbit.co.kr/store/books/loop.php?p_code=1234");


console.log(querystring.parse(parsedObject.query));

//querystring을 자바스크립트 객체로 리턴함.
//{ p_code: '1234' }