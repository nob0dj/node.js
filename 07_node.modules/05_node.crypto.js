const crypto =  require("crypto");

//해쉬생성
//sha256
let shasum = crypto.createHash('sha256');
shasum.update('mypassword');//messsage digest 를 통한 hashing
let output = shasum.digest('hex');//hash.digest([encoding])

//출력
console.log('crypto_hash : ',output);

//sha512
shasum = crypto.createHash('sha512');
shasum.update('mypassword');//messsage digest 를 통한 hashing
output = shasum.digest('hex');

//출력
console.log('crypto_hash : ',output);

/*
crypto_hash :  89e01536ac207279409d4de1e5253e01f4a1769e696db0d6062ca9b8f56767c8
crypto_hash :  a336f671080fbf4f2a230f313560ddf0d0c12dfcf1741e49e8722a234673037dc493caa8d291d8025f71089d63cea809cc8ae53e5b17054806837dbe4099c4ca
*/


//양방향 암호화

//변수선언
let key = '나만 알고 있는 비밀키';
let input = 'password';

//암호화
let cipher = crypto.createCipher('aes192',key);
cipher.update(input, 'utf8', 'base64');
let cipheredOutput = cipher.final('base64');

//암호화해제
let decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64','utf-8');
var decipheredOutput = decipher.final('utf8');

//출력
console.log("원래문자열 : ",input);
console.log("암호화 : ",cipheredOutput);
console.log("암호화 해제 : ",decipheredOutput);

/*
    원래문자열 :  password
    암호화 :  bFe/G3Ao6nXm211/wGQJkA==암호화 해제 :  password
*/