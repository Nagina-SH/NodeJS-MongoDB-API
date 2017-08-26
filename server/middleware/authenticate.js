var {user} = require('./../models/user');

var authenticate = (req, res, next) => {
	var token = req.header('x-auth');
	
	console.log(`token ${token}`);
	
	user.findByToken(token).then((result) => {
		if(!result){
			return res.status(404).send();
		}
		
		req.user = result;
		req.token = token;
		//console.log(`req.user: ${req.result}`);
		next();		
		
	}).catch((e) => {
		console.log(`error: ${e}`);
		return res.status(400).send();
	});

};

module.exports = {
	authenticate
};	