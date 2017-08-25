 var users = mongoose.model('users', {
	text: {type: String},
	completed: {type: Boolean},
	completedAt: {type: Number}
});