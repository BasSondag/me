myApp.factory('pollFactory', function($http){
	var factory= {};

	factory.getPolls = function(currentUser, callback){
		$http.get('/polls').success(function(data){
			console.log(data, "factory get list")
			callback(data)
		})
	}


	factory.addQuestion = function(newQuestion, currentUser, callback){
		console.log(currentUser, 'factory')
		$http.post('/polls/'+ currentUser._id,  newQuestion).success(function(data){
			
		})
	}

	factory.showPoll = function(id, callback){
		$http.get('polls/' + id).success(function(data){
			console.log(data, "ques in facto")
			callback(data)
		})
	}

	factory.addCount1 = function(poll, callback){
		console.log(poll._id)
		$http.post('poll1/' + poll._id, poll).success(function(data){
			poll.count1 += 1
			console.log(poll)
			callback(data)
		})

	}
	factory.addCount2 = function(poll, callback){
		console.log(poll._id)
		$http.post('poll2/' + poll._id,poll).success(function(data){
			poll.count2 += 1
			console.log(poll)
			callback(data)
		})

	}
	factory.addCount3 = function(poll, callback){
		console.log(poll._id)
		$http.post('poll3/' + poll._id, poll).success(function(data){
			poll.count3 += 1
			console.log(poll)
			callback(data)
		})

	}
	factory.addCount4 = function(poll, callback){
		console.log(poll._id)
		$http.post('poll4/' + poll._id, poll).success(function(data){
			poll.count4 += 1
			console.log(poll)
			callback(data)
		})

	}




	return factory;
})
