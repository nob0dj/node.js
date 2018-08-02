console.log('숫자 : %d + %d = %d', 100, 50, 100+50);
console.log('문자열 : %s', 'HelloWorld...!','특수문자와 상관없는 추가적인 파라미터');
console.log('JSON : %j',{name:"김동현"});

//시간측정시작
console.time('alpha');

//로직
var output = 0;
for(var i=0; i<10000; i++){
    output += i;
}
console.log('output=%d',output);

//시간측정끝
console.timeEnd('alpha');

//글자색변경
console.log('\u001b[31m', 'Hello Wordl....!');
console.log('\u001b[32m', 'Hello Wordl....!');
console.log('\u001b[33m', 'Hello Wordl....!');
console.log('\u001b[34m', 'Hello Wordl....!');
console.log('\u001b[35m', 'Hello Wordl....!');
console.log('\u001b[36m', 'Hello Wordl....!');
//밝은색으로 변경
console.log('\u001b[1m');
console.log('\u001b[31m', 'Hello Wordl....!');
console.log('\u001b[32m', 'Hello Wordl....!');
console.log('\u001b[33m', 'Hello Wordl....!');
console.log('\u001b[34m', 'Hello Wordl....!');
console.log('\u001b[35m', 'Hello Wordl....!');
console.log('\u001b[36m', 'Hello Wordl....!');

//초기화
console.log('\u001b[0m');
//배경색변경
console.log('\u001b[40m', 'Hello Wordl....!');
console.log('\u001b[41m', 'Hello Wordl....!');
console.log('\u001b[42m', 'Hello Wordl....!');
console.log('\u001b[43m', 'Hello Wordl....!');
console.log('\u001b[44m', 'Hello Wordl....!');
console.log('\u001b[45m', 'Hello Wordl....!');
console.log('\u001b[0m');