//1.이벤트추가
//process객체에 exit이벤트 연결
process.on('exit',(code) => {
    console.log(`About to exit with code : ${code}`);//template literals backtick(`)으로 감쌀것
});

//process객체에 uncaughtException이벤트 연결
process.on('uncaughtException', err =>{
    console.log(`Caught Exception : ${err}`);
});

//2초 간격으로 3번 예외 발생
var count = 0;
var test = ()=>{
    //탈출코드
    count++;
    if(count > 3) return;

    //예외발생
    setTimeout(test, 2000);
    nonExist.foo();

};

setTimeout(test, 2000);


