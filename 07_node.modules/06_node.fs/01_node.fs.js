const fs = require('fs');

//1. 파일읽기(sync)
// var text = fs.readFileSync("textfile.txt","utf-8");
// console.log(text);//한글깨짐 없음.

/*
    1234
    This is textfile.txt
    안녕하세요, textfile.txt입니다.
*/

//2. 파일읽기(async)
// fs.readFile("textfile.txt",'utf-8',function(error, data){
//     console.log(data);
// });
// console.log(1234);

/*
    1234
    This is textfile.txt
    안녕하세요, textfile.txt입니다.
*/


//쓰기작업할 문자열
var text = "Hello world"

//3. 파일쓰기(sync)
fs.writeFileSync("TextFileOtherWriteSync.txt",text, 'utf8');

//4. 파일쓰기(sync)
fs.writeFile("TextFileOtherWrite.txt", text, 'utf8', function(error){
    console.log("WRITE FILE ASYNC COMPLETE");
});
console.log(1234);


/*
    1234
    WRITE FILE ASYNC COMPLETE
*/