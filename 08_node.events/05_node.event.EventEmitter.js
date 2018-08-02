//EventEmitter객체생성
//var custom = new process.EventEmitter();//이전버젼에서 사용하던 방식으로 사용불가
var EventEmitter = require('events');
var custom = new EventEmitter();

//이벤트 연결
custom.on('tick', (code)=>{
    console.log("tick이벤트 발생!!");
});

//이벤트 강제발생
custom.emit('tick');

