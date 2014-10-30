// This is the UI Router routes config file for your application.
// Since UI Router is way the hell too complex to describe in detail here
// as a comment, here's a link to uiRouter's docs
// 	https://github.com/angular-ui/ui-router
angular.module('seedApp').config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('root', {
			resolve: {
				// objects and promises set here will resolve before handing off to the root state.
			},
			controller: 'masterAppPageCtrl', //What controller should be instantiated for this state?
			templateUrl: '/apex/seedapp_nav', // url path to template for this state.
			abstract: true
		})
		.state('root.firstPage', {
			controller: 'firstPageCtrl', // note, this controller doesn't exist out of the box
			url: '/first',
			templateUrl: '/apex/awesomePage' // url path to template also doesn't exist out of the box.
		});

	$urlRouterProvider.when('', '/first'); // which url / state to boot into if none is given in the request.
	// think of this as a default state

});