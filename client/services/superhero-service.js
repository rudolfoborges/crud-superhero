myApp.factory('SuperheroService', function($resource){
	return $resource('api/superheros/:superheroId', {superheroId: '@_id'}, {update: {method: 'PUT'}});
});