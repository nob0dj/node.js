//이벤트 강제 발생
//exit이벤트 리스너 연결
process.on('exit',function(){
    console.log("bye bye~!!");
});

//이벤트 강제발생
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

//프로그램 종료여부
console.log("프로그램 실행중...");

/*
bye bye~!! //=> emit함수에 의한 exit이벤트핸들러 호출
bye bye~!!
bye bye~!!
bye bye~!!
프로그램 실행중...
bye bye~!! //=> 실제 프로그램 종료(exit) 이벤트발생

*/

//프로그램 종료
process.exit();//이후 코드는 실행되지 않음

//프로그램 종료여부
console.log("프로그램 실행중...정말??");