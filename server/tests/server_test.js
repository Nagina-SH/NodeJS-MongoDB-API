const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {user} = require('./../models/user');

/*
beforeEach((done) => {
	console.log(`delete`);
	
	user.remove({})
	.then((result) => {
		console.log(`delete, ${result}`);
		done();
	});
});

*/
describe('POST /user method', () =>{
	
	it('should create a new user', (done) => {
		var text = 'test@test4.com';
		
		request(app)
		.post('/user')
		.send({email : text})
		.expect(200)
		.expect((res) => {
		console.log(`post1 ${res.body.email}`);
			//expect(res.body.email).toBe(text);
		})
		.end((err, res) => {
			if(err){
				return done(err);
			};
		})
		done();
	});
	
	it('GET /list', (done) => {
		// console.log(`read get`);
		
		var text = 'test@test2.com';
		request(app)
		.get('/list')
		.end((err, response) => {
           // assert(response.body.length === 1);
          // assert(response.body[0].obj.email === 'miami@test.com');
		   // assert(response.body[0].obj.email);
		   expect(response.body[0].obj.email).toBe(text);
		  // console.log(`read get`, response.body[0].email);
		  
		  //console.log(response.body);
            done();
		
	});
	
} );

});