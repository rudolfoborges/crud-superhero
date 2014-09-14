var myApp = angular.module('myApp', ['ngRoute', 'ngResource']);

myApp.config(function($routeProvider, $locationProvider){
	$routeProvider.
		when('/', {controller: 'SuperheroController', templateUrl: '/client/views/list.html'}).
		when('/superheros', {controller: 'SuperheroController', templateUrl: '/client/views/list.html'}).
		when('/superheros/new', {controller: 'SuperheroController', templateUrl: '/client/views/form.html'});
	$locationProvider.html5Mode(false);
});