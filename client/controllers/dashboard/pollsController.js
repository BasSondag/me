myApp.controller('pollsController', function($scope, $routeParams, $location, userFactory, pollFactory){
	var currentUser = null
	$scope.lists = {}
	userFactory.readUser(function(data){
		console.log('here')
		currentUser = data;
		$scope.currentUser = data;
	});

	pollFactory.getPolls(currentUser ,function(data){
		console.log(data, 'controller get list')
		$scope.polls = data
	})	
	
	
});