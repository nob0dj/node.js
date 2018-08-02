//모듈 추출 : 현재경로를 반드시 입력할 것(./파일명)
//확장자가 없다면, 1.js파일 2.폴더/index.js를 찾는다.
//var module = require('./module.js');
var module = require('./module_');

//모듈사용
console.log('abs(-273) = ', module.abs(-273));
console.log('circleArea(3) = ', module.circleArea(3));