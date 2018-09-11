//로그인체크용 더미데이터베이스구현
exports.DummyDB = (()=>{
    //변수선언
    var DummyDB = {};
    var storage = [];

    //초기화
    var user = {
        id : 'honggd',
        name : '홍길동',
        password : '1234',
        test : function(){
            console.log(user);//undefined
        },
        toString : () => user.id+","+user.name+"," +user.password//this.id가 아니므로 주의할 것.
    }
    storage.push(user);
    
    // console.log(this, this === module.exports);//nodejs에서 this는 exports객체를 가리킨다.
    // console.log(user.test());//undefied
    // console.log("storage[0]="+storage[0]);//storage[0]=honggd,홍길동,1234

    //로그인체크함수
    DummyDB.loginCheck = (id,password)=>{
        //로그인성공 => 해당 user객체 리턴
        //비밀번호가 틀리면 => 0 리턴
        //아이디가 존재하지 않으면 => -1 리턴
        for(var i in storage){
            if(storage[i].id === id){
                if(storage[i].password === password){
                    return 1;
                }
                else {
                    return 0;
                }
            }
        }

        return -1;
    }

    //해당 id에 해당하는 사용자 객체를 리턴함.
    DummyDB.get = (id) => {
        for(var i in storage){
            if(storage[i].id === id){
                return storage[i];
            }
        }
    }

    return DummyDB;

})();

