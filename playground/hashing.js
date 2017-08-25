const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
	id: 10
};

var token = jwt.sign(data, '888');
console.log(`token ${token}`);

var decoded = jwt.verify(token, '888');
console.log('decoded', decoded);


/*
var message = 'Shailendra';
var hash = SHA256(message).toString();


console.log(hash);

var data = {
	id: 4
};
console.log(`data ${data.id}`);
var token = {
	data: data.id,
	hash: SHA256(JSON.stringify(data.id)).toString()
};

// console.log(`token ${token.data1}`);
// console.log(`token ${token.hash}`);

var resultHash = SHA256(JSON.stringify(token.data)).toString();
// console.log(`resultHash ${resultHash}`);


if(resultHash === token.hash){
	console.log('Valid user');
}else{
	console.log('Not Valid user');
};

*/