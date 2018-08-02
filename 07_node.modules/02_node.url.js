var url = require('url');

//parse메소드의 두번째인자는 queryString의 parse여부임. default:false
var parsedObject = url.parse("http://www.hanbit.co.kr/store/books/loop.php?p_code=1234",true);
console.log(parsedObject);



/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.hanbit.co.kr',
  port: null,
  hostname: 'www.hanbit.co.kr',
  hash: null,
  search: '?p_code=1234',
  query: 'p_code=1234',
  pathname: '/store/books/loop.php',
  path: '/store/books/loop.php?p_code=1234',
  href: 'http://www.hanbit.co.kr/store/books/loop.php?p_code=1234' }

*/

/*
//url.parse("url",true)

Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.hanbit.co.kr',
  port: null,
  hostname: 'www.hanbit.co.kr',
  hash: null,
  search: '?p_code=1234',
  query: { p_code: '1234' }, //<================== 객체
  pathname: '/store/books/loop.php',
  path: '/store/books/loop.php?p_code=1234',
  href: 'http://www.hanbit.co.kr/store/books/loop.php?p_code=1234' }

*/