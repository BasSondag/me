var myApp = angular.module('myApp', ['ngRoute']);


(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',{
				controller: 'usersController',
				templateUrl: "partials/users/index.html"
			})
			.when('/dashboard',{
				controller: 'pollsController',
				templateUrl: "partials/polls/dashboard.html"
			})
			.when('/polls/:id', {
				controller: 'showsController',
				templateUrl: "partials/polls/show.html"
			})
			.when('/create',{
				controller: 'createsController',
				templateUrl: "partials/polls/create.html"	
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());