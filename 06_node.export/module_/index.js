//절대값을 구하는 메소드 정의
//exports객체의 속성으로 정의
exports.abs = function(num){
    if(num>0)
        return num;
    else 
        return -num;
};

//원넓이를 구하는 메소드
exports.circleArea = function(r){
    return r*r*Math.PI;
}

