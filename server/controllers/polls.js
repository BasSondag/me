	var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var User = mongoose.model('User');

module.exports = (function(){
	console.log('in controller');
	return {

		count1: function(req, res){
			Poll.findOne({_id: req.params.id}, function(err, poll){
				if(err){
					console.log('could not find mongoose or something happened update mongoose');
				} else {
					poll.question= req.body.question
					poll.option1 = req.body.option1
					poll.option2 = req.body.option1
					poll.option3 = req.body.option1
					poll.option4 = req.body.option1
					poll.count1 = req.body.count1 + 1
					poll.count2 = req.body.count2
					poll.count3 = req.body.count3
					poll.count4 = req.body.count4
					console.log(poll, 'before save')
					poll.save(function(err, updatedpoll){
						if(err){
							console.log(err);
							console.log('saving updated poll');
						} else {
							console.log('success ')
							res.json(updatedpoll);
						}
					})
				}
			})
		},

		count2: function(req, res){
			Poll.findOne({_id: req.params.id}, function(err, poll){
				if(err){
					console.log('could not find mongoose or something happened update mongoose');
				} else {
					poll.question= req.body.question
					poll.option1 = req.body.option1
					poll.option2 = req.body.option1
					poll.option3 = req.body.option1
					poll.option4 = req.body.option1
					poll.count1 = req.body.count1 
					poll.count2 = req.body.count2 + 1
					poll.count3 = req.body.count3
					poll.count4 = req.body.count4
					console.log(poll, 'before save')
					poll.save(function(err, updatedpoll){
						if(err){
							console.log(err);
							console.log('saving updated poll');
						} else {
							console.log('success ')
							res.json(updatedpoll);
						}
					})
				}
			})
		},

		count3: function(req, res){
			Poll.findOne({_id: req.params.id}, function(err, poll){
				if(err){
					console.log('could not find mongoose or something happened update mongoose');
				} else {
					poll.question= req.body.question
					poll.option1 = req.body.option1
					poll.option2 = req.body.option2
					poll.option3 = req.body.option3
					poll.option4 = req.body.option4
					poll.count1 = req.body.count1 
					poll.count2 = req.body.count2
					poll.count3 = req.body.count3 + 1
					poll.count4 = req.body.count4
					console.log(poll, 'before save')
					poll.save(function(err, updatedpoll){
						if(err){
							console.log(err);
							console.log('saving updated poll');
						} else {
							console.log('success ')
							res.json(updatedpoll);
						}
					})
				}
			})
		},

		count4: function(req, res){
			Poll.findOne({_id: req.params.id}, function(err, poll){
				if(err){
					console.log('could not find mongoose or something happened update mongoose');
				} else {
					poll.question= req.body.question
					poll.option1 = req.body.option1
					poll.option2 = req.body.option2
					poll.option3 = req.body.option3
					poll.option4 = req.body.option4
					poll.count1 = req.body.count1 
					poll.count2 = req.body.count2
					poll.count3 = req.body.count3
					poll.count4 = req.body.count4 + 1
					console.log(poll, 'before save')
					poll.save(function(err, updatedpoll){
						if(err){
							console.log(err);
							console.log('saving updated poll');
						} else {
							console.log('success ')
							res.json(updatedpoll);
						}
					})
				}
			})
		},




		poll: function(req, res){ 
			Poll.findOne({_id: req.params.id}, function(err, poll){
				if(err){
					console.log(err)
				} else {
					res.json(poll)
				}
			})
		},


		show: function(req, res){
			console.log('polls show');
			Poll.find({})
				.populate('_user')
				.exec(function(err, polls){
					console.log(polls)
					res.json(polls);
				})





			// User.findOne({_id: req.params.id})
			// .populate('lists')
			// .exec(function(err, user){
			// 	console.log(user, "index list")
			// 	res.json('user', {user: user});
			// });
		},

		create: function(req, res){
			User.findOne({_id: req.params.id}, function(err, user){
				console.log(user, ' in create')
				if(err){
					console.log(err, 'cant find user');
				} else {
					var poll = new Poll(req.body);
					console.log(req.body, 'is this my poll')
					poll._user = user._id;
					poll.save(function(err){
						if(err){
							console.log(err, "here is vallidaton")
						} else{
							user.polls.push(poll);
							user.save(function(err, results){
								if(err || !results){
									console.log(err , "validtion 1");
								} else {
									console.log(results, "save user, poll")
									res.json(results)
								}
									
							})
						}
					})
				}
			})
		}
	}
})()