myApp.controller('SuperheroController', ['$scope', '$location', '$routeParams', 'SuperheroService',
		 function($scope, $location, $routeParams, service){

	$scope.find = function(){
		$scope.superheros = service.query(function(superheros){
			$scope.superheros = superheros;	
		});
	}

	$scope.show = function(){
		if($routeParams.id){
			$scope.superhero = service.get({superheroId: $routeParams.id});
		}	
	}

	$scope.save = function(){
		if($scope.superhero._id){
			$scope.update();
		} else {
			$scope.create();
		}
	}

	$scope.create = function(){
		var model = {
			name: $scope.superhero.name,
			superpower: $scope.superhero.superpower
		};
		service.save(model, function(res){

		});

		$scope.superhero = '';
	}	

	$scope.update = function(){
		var superhero = $scope.superhero;
		superhero.$update(function(){
			$location.path('superheros');
		});
	}

	$scope.destroy = function(superhero){
		superhero.$remove(function(){
			for(var i in $scope.superheros){
				if($scope.superheros[i] === superhero){
					$scope.superheros.splice(i, 1);
				}
			}
		});
	}

}]);