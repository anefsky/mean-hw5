angular.module('foodApp').config(
	function($routeProvider, $locationProvider){
		$routeProvider.
		when('/', {
			template: 'test'
		}).
		when('/recipes', {
			template: '<recipe-list></recipe-list>'
		}).
		when('/reviews', {
			template: '<reviews-list></reviews-list>'
		}).
		otherwise({
			redirectTo: '/404'
		});
		$locationProvider.html5Mode(true)
})