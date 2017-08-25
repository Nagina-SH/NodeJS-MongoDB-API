const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {task} = require('./models/users');
var {user} = require('./models/user');

//const Users = require('./models/users');
//const user = require('./models/user');
const {MongoClient, ObjectID} = require('mongodb');

const PORT = process.env.PORT||3000; 
var app = express();

app.use(bodyParser.json());

app.post('/user', (req, res) => {
	
	// var users = new users({
		// text: req.body.text
	// });
	
	var joe = new user({
		email: req.body.email
	});
//console.log(`save1, ${joe}`);
	joe.save()
	.then((result) => {
		//console.log(`save, ${result}`);
		res.send(result);
	}, (err) => {
		//console.log('err');
		res.status(400).send(err);
	});
	
});

app.post('/task/', (req, res) => {
	
	//console.log(res);
	
	var joe = new task({
		text: req.body.text,
		completed: req.body.completed,
		completedAt: req.body.completedAt
	});
//console.log(`save1, ${joe}`);
	joe.save()
	.then((result) => {
		//console.log(`save, ${result}`);
		res.send(result);
	}, (err) => {
		//console.log('err');
		res.status(400).send(err);
	});
	
});



app.get('/list', (req, res) => {
	user.find({"email" : "test@test2.com"})
	.then((result) => {
		//console.log(`save, ${result}`);
		res.send(result);
	}, (err) => {
		//console.log('err');
		return res.status(400).send(e);
	});
});



app.delete('/delete/:id', (req, res) => {
	var id = new ObjectID(req.params.id);
	//var id = req.params.id;
console.log(id);
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	user.remove({_id: id})
	.then((result) => {
		if(!result){
			return res.status(404).send();
		}
		
		res.send(result);
	}).catch((e) => {
		return res.status(400).send();
	});
	
});

app.patch('/update/:id', (req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);
	
	
	var id = new ObjectID(id);
	if(!ObjectID.isValid(id)){
		console.log(`id: ${id}`);
		return res.status(404).send();
		
	}
	
	if(_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	}else{
		//body.completed = false;
		body.completedAt = 1234;
	}
	console.log(`id2: ${id}`);
	console.log(`completed: ${body.completed}`);
	console.log(`completedAt: ${body.completedAt}`);
	
	task.findByIdAndUpdate({_id: id}, {$set: body}, {new : true})
	.then((result) => {
		if(!result){
			return res.status(404).send();
		}
		res.send(result);
	}).catch((e) => {
		return res.status(400).send(e);
	})
});

app.post('/users', (req, res) => {
	var id = req.params.id
	var body = _.pick(req.body, ['email', 'password']);
	var insert_user = new user(body);
	
	insert_user.save() 
	.then((result) => {

		return insert_user.generateAuthToken();
		
	}).then((token) => {
		res.header('x-auth', token)
		.send(insert_user);
		
	}).catch((e) => {
		console.log(e);
		res.status(404).send(e);
	});
});

app.listen(PORT, () => {
	console.log(`server up and running on port ${PORT}`);
});



module.exports = {
	app
}