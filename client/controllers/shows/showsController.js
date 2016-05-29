myApp.controller('showsController', function($scope, $routeParams, $location, userFactory, pollFactory){
	var url = window.location.pathname;
	var id = url.substring(url.lastIndexOf('/') + 1);
	$scope.poll= 
	console.log(id, 'here')
		pollFactory.showPoll(id, function(data){
			console.log('here', id)
			console.log(data)
			$scope.poll = data
		})

		$scope.addCount1 = function(count){
			console.log(count)
			pollFactory.addCount1(count, function(data){

			})
		}

		$scope.addCount2 = function(count){
			console.log(count)
			pollFactory.addCount2(count, function(data){

			})
		}

		$scope.addCount3 = function(count){
			console.log(count)
			pollFactory.addCount3(count, function(data){

			})
		}

		$scope.addCount4 = function(count){
			console.log(count)
			pollFactory.addCount4(count, function(data){

			})
		}

		
})

