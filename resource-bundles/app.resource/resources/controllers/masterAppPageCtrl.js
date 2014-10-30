angular.module('seedApp')
	.controller('masterAppPageCtrl',
		function($scope, $timeout, $filter, $rootScope, $q, $state, sfrquery, vfr, sfr, $window, $modal, $log,
			Version) {

			// Here we'll setup the $scope variable which is available to our view template 
			// for display and manipulation
			// 
			// In Angular, the "controller" exists only to setup this scope variable. 
			// Best practices move logic to services, but for the sake of this Training
			// we'll be placing our Salesforce Integration logic here.

			// On line 4 above, you'll see we Dependency Injected "Version" this is
			// an Angular.js Constant, defined in resources/app/constants.js 

			$scope.version = Version;

			// sfrQuery is one of the services provided ngForce. It allows you to make
			// rest api calls from within an Angular service or controller and uses
			// promises to execute asynchronous tasks like fetching records. 
			// Note that we dependency injected sfr and sfrQuery on line 4 above.
			// This is an exmaple of how you retrieve a record set via a query.
			// 
			// this method returns a promise and is therefore "chainable"
			sfrquery.query("SELECT id, Name, Phone FROM Account")
			// Promises allow you to attach success and catch handlers 
			// via .then() -- success and 
			// via .catch() -- failure methods.
			.then(function(results) {
				// this code will not be run unless the promise resolves
				// successfully.
				// Again, we set a $scope variable to expose the data to the view
				$scope.accounts = results;
			})
				.catch(function(e) {
					// well Crap. An error has occured. In this case, log the error 
					// in the js console
					$log.error("Caught an Error trying to retrieve soql query results", e);
				});

			// $log.log(vfr);
			// var q = vfr.query('SELECT id, Name FROM Contact');
			// $log.log(vfr);
			// q.then(function(x) {
			// 	$log.log('vfr ', x);
			// });
		});