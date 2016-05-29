var userscontroller = require('./../controllers/users.js');
var pollscontroller = require('./../controllers/polls.js');
module.exports = function(app){

	app.get('/users', function(req,res){
		console.log("in get route");
		userscontroller.index(req, res);
	});


	app.post('/users',function(req,res){
		console.log("in add route")
		userscontroller.create(req, res);
	});

	app.post('/polls/:id', function(req, res){
		pollscontroller.create(req, res);
	});

	app.get('/users/:id', function(req,res){
		userscontroller.show(req, res)
	});

	app.get('/polls', function(req, res){
		pollscontroller.show(req, res)
	})

	app.get('/polls/:id', function(req, res){
		pollscontroller.poll(req, res)
	})

	app.post('/poll1/:id', function(req, res){
		pollscontroller.count1(req, res)
	})
	app.post('/poll2/:id', function(req, res){
		pollscontroller.count2(req, res)
	})
	app.post('/poll3/:id', function(req, res){
		pollscontroller.count3(req, res)
	})
	app.post('/poll4/:id', function(req, res){
		pollscontroller.count4(req, res)
	})
}