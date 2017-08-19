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
	
	db.collection('Users').find({
		_id: new ObjectID('59986e32c15b9b1bdc457c85')
		}).toArray()
	.then((docs) => {
		console.log('docs');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log(err);
	});
	
	
	db.collection('Users').find().count()
	.then((count) => {
		console.log(`Users count ${count}`);
	}, (err) => {
		console.log(err);
	});
	

	// db.collection('test').insert({
		// name: 'Shailendra',
		// age: 29
	// },(err, result) => {
		// if(err) {
			// return console.log('Unable to insert the data into test collection', err);	
		// }
		// console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	
	
	// db.collection('Users').insert({
		// name: 'Andrew',
		// age: 29,
		// location: 'UK'
	// }, (err, result) => {
		// if(err){
			// return console.log('Unable to insert the data into test collection', err);
		// }
		// console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	// });
	
	//db.close();
	
});