myApp.controller('createsController', function($scope, $routeParams, $location, userFactory, pollFactory){
	var currentUser = null
	$scope.lists = {}
	userFactory.readUser(function(data){
		currentUser = data;
		$scope.currentUser = data;
	});

	$scope.addQuestion = function(newQuestion){
		console.log('adQue')
		pollFactory.addQuestion(newQuestion, currentUser, function(data){
			console.log(data, "in addQuestion controller")
			newQuestion= {}
			$location.path('/dashboard');
		})
	}

})