//const insert = require('./mongodb-delete');
// const mongodb = require('mongodb');
// var MongoClient = mongodb.MongoClient;

//destructuring
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

// console.log(obj);

// var user = {name: 'Nagina', age: '27'};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost/nodejsdb', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to nodejsdb server');
	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('59988d391187c613c8cdf5c9')
	}, {
		$set: {name: 'Kanya'},
		$inc: { age: 1} 
	}, {
		returnOriginal: false
	})
	.then((result) => {
		console.log(result.value.name);
	});
	
	db.close();
	
});