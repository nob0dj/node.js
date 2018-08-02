//process.argv
//명령어 node 05_node.process --exit 10000
process.argv.forEach(function(item, index){
    //출력
    console.log(index+' : '+typeof(item)+' : '+item);

    //실행매개변수에 --exit가 있는 경우
    if(item == '--exit'){
        //다음실행할 매개변수를 가져오기
        var exitTime = Number(process.argv[index+1]);

        //일정시간후 종료
        setTimeout(function(){
            //exit_code 기본값 0->정상종료, 1->비정상종료(암묵적 약속)
            process.exit();
        }, exitTime);
    }
});

//process객체 속성
console.log('- process.env : ',process.env);
console.log('- process.version : ',process.version);
console.log('- process.versions : ',process.versions);
console.log('- process.arch : ',process.arch);
console.log('- process.platform : ',process.platform);
console.log('- process.connected : ',process.connected);
console.log('- process.execArgv : ',process.execArgv);
console.log('- process.exitCode : ',process.exitCode);
console.log('- process.mainModule : ',process.mainModule);
console.log('- process.release : ',process.releaes);
console.log('- process.memoryUsage() : ',process.memoryUsage());
console.log('- process.uptime : ',process.uptime);
console.log('- process.uptime : ',process.uptime);
console.log('- process.uptime : ',process.uptime);

