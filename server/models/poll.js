var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PollSchema = new mongoose.Schema({
	question: String,
	option1: String,
	count1: { type: Number, default: 0 },
	option2: String,
	count2: { type: Number, default: 0 },
	option3: String,
	count3: { type: Number, default: 0 },
	option4: String,
	count4: { type: Number, default: 0 },
	_user: {type: Schema.Types.ObjectId, ref: 'User'},	
	date:{type: Date, default: Date.now }	

});
	
mongoose.model('Poll', PollSchema);

PollSchema.path('question').required(true, 'question cannot be blank');
PollSchema.path('question').minlength(8, 'question must be 8 caracters');
PollSchema.path('option1').required(true, 'option1 cannot be blank');
PollSchema.path('option1').minlength(3, 'option1 must be 3 caracters');
PollSchema.path('option2').required(true, 'option2 cannot be blank');
PollSchema.path('option2').minlength(3, 'option2 must be 3 caracters');
PollSchema.path('option3').required(true, 'option3 cannot be blank');
PollSchema.path('option3').minlength(3, 'option3 must be 3 caracters');
PollSchema.path('option4').required(true, 'option4 cannot be blank');
PollSchema.path('option4').minlength(3, 'option4 must be 3 caracters');

	