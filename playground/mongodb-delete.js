var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;

MongoClient.connect('mongodb://localhost/nodejsdb', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	
	console.log('Connected to nodejsdb server');
	
	db.collection('users').insert({email: 'delete email'})
	.then((result) => {
		//console.log(result);
		console.log(JSON.stringify(result.ops, undefined, 2))
	}, (e) => {
		console.log(e);
	});
	
	db.collection('users').remove({email: 'delete email'})
	.then((result) => {
		console.log(result);
		//console.log(JSON.stringify(result.ops, undefined, 2))
	}, (e) => {
		console.log(e);
	});
	
	db.close();
});