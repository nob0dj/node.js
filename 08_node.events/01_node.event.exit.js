process.on('exit', (code) => {
    console.log('About to exit with code : ${code}');
});

//Ctrl+Z로 js를 종료, code 매개변수에 0 대입
//bout to exit with code 0