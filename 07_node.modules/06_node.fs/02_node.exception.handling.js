const fs = require('fs');

//존재하지 않는 파일읽기 : 프로그램 비정상 종료
// var text = fs.readFileSync("textfile_.txt","utf-8");
/*
    fs.js:646
    return binding.open(pathModule._makeLong(path), stringToFlags(flags), mode);
                    ^

    Error: ENOENT: no such file or directory, open 'textfile_.txt'
        at Object.fs.openSync (fs.js:646:18)
        at Object.fs.readFileSync (fs.js:551:33)
        at Object.<anonymous> (/Users/nobodj/Dropbox/Coding/node.js/07_node.modules/06_node.fs/02_node.exception.handling.js:3:15)
        at Module._compile (module.js:652:30)
        at Object.Module._extensions..js (module.js:663:10)
        at Module.load (module.js:565:32)
        at tryModuleLoad (module.js:505:12)
        at Function.Module._load (module.js:497:3)
        at Function.Module.runMain (module.js:693:10)
        at startup (bootstrap_node.js:191:16)
*/

//1. 동기화 메소드의 예외처리
try{
    //1.읽기
    // var text = fs.readFileSync("textfile_.txt","utf-8");
    // console.log(text);

    //2.쓰기
    fs.writeFileSync("textfile.txt", "으라차차...","utf8");
    console.log("FILE WRITE COMPLETE!");

} catch(e) {
    console.log(e);
}
// console.log("***** 프로그램 정상종료 *****");

/*
    fs.js:646
    return binding.open(pathModule._makeLong(path), stringToFlags(flags), mode);
                    ^

    Error: ENOENT: no such file or directory, open 'textfile_.txt'
        at Object.fs.openSync (fs.js:646:18)
        at Object.fs.readFileSync (fs.js:551:33)
        at Object.<anonymous> (/Users/nobodj/Dropbox/Coding/node.js/07_node.modules/06_node.fs/02_node.exception.handling.js:3:15)
        at Module._compile (module.js:652:30)
        at Object.Module._extensions..js (module.js:663:10)
        at Module.load (module.js:565:32)
        at tryModuleLoad (module.js:505:12)
        at Function.Module._load (module.js:497:3)
        at Function.Module.runMain (module.js:693:10)
        at startup (bootstrap_node.js:191:16)
    DONGHYUNs-MacBook-Pro:06_node.fs nobodj$ node 02_node.exception.handling.js
    { Error: ENOENT: no such file or directory, open 'textfile_.txt'
        at Object.fs.openSync (fs.js:646:18)
        at Object.fs.readFileSync (fs.js:551:33)
        at Object.<anonymous> (/Users/nobodj/Dropbox/Coding/node.js/07_node.modules/06_node.fs/02_node.exception.handling.js:25:19)
        at Module._compile (module.js:652:30)
        at Object.Module._extensions..js (module.js:663:10)
        at Module.load (module.js:565:32)
        at tryModuleLoad (module.js:505:12)
        at Function.Module._load (module.js:497:3)
        at Function.Module.runMain (module.js:693:10)
        at startup (bootstrap_node.js:191:16)
    errno: -2,
    code: 'ENOENT',
    syscall: 'open',
    path: 'textfile_.txt' }
    ***** 프로그램 정상종료 *****
*/



//2.비동기메소드의 동기화처리
fs.readFile("textfile.txt",'utf-8',function(error, data){
    if(error)
        console.log(error);
    else
        console.log(data);
});

fs.writeFile("TextFileOtherWrite.txt", "안뇽", 'utf8', function(error){
    if(error) 
        console.log(error);
    else
        console.log("WRITE FILE ASYNC COMPLETE");

});
console.log("***** 프로그램 정상종료 *****");

/*
    ***** 프로그램 정상종료 *****
    WRITE FILE ASYNC COMPLETE
    으라차차...
*/

//(심화)조기리턴으로 리팩토링
fs.readFile("textfile.txt",'utf-8',function(error, data){
    if(error) return console.log(error);
        
    console.log(data);
});

fs.writeFile("TextFileOtherWrite.txt", "안뇽", 'utf8', function(error){
    if(error) return console.log(error);
        
    console.log("WRITE FILE ASYNC COMPLETE");

});
