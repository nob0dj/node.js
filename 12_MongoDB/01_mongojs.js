var mongojs = require('mongojs');
var db = mongojs('node',['products']);

//데이터추출
db.products.find((error, data)=>{
    console.log(data);
});