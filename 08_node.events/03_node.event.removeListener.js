//1.이벤트추가
var onUncaughtException = err => {
    console.log(`Caught Exception : ${err}`);

    //2.이벤트제거
    process.removeListener('uncaughtException', onUncaughtException);
};

//process객체에 uncaughtException이벤트 연결
process.on('uncaughtException', onUncaughtException);

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

/*
//출력결과 : 한번실행후 에러나서 프로그램 종료.
Caught Exception : ReferenceError: nonExist is not defined
/Users/nobodj/Dropbox/Coding/node.js/08_node.events/03_node.event.removeListener.js:21
    nonExist.foo();
    ^

ReferenceError: nonExist is not defined
    at Timeout.test [as _onTimeout] (/Users/nobodj/Dropbox/Coding/node.js/08_node.events/03_node.event.removeListener.js:21:5)
    at ontimeout (timers.js:498:11)
    at tryOnTimeout (timers.js:323:5)
    at Timer.listOnTimeout (timers.js:290:5)
*/
