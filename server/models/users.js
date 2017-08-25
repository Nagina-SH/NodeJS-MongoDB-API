var mongoose = require('mongoose');

// create database schema or model
 const task = mongoose.model('employee_work', {
	text: {type: String, required: true},
	completed: {type: Boolean, default: false},
	completedAt: {type: Number}
});
 

module.exports = {
	task
};