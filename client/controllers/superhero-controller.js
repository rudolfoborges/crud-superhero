myApp.controller('SuperheroController', ['$scope', 'Superhero', function($scope, Superhero){

	$scope.find = function(){
		$scope.superheros = Superhero.query(function(superheros){
			$scope.superheros = superheros;	
		});
	}

	$scope.save = function(superhero){
		if(superhero._id){
			$scope.update(superhero);
		} else {
			$scope.create(superhero);
		}
	}

	$scope.create = function(superhero){
		var model = new Superhero({
			name: superhero.name,
			superpower: superhero.superpower
		});
		model.$save(function(res){

		});

		$scope.superhero = '';
	}	

	$scope.update = function(superhero){

	}

	$scope.destroy = function(superhero){
		if(superhero){
			superhero.$remove();

			for(var i in $scope.superheros){
				if($scope.superheros[i] === superhero){
					$scope.superheros.splice(i, 1);
				}
			}
		}
	}

}]);