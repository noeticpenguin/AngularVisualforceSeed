// This file defines the runtime configuration of the app. 
// Note that you can DI modules into this. 
angular.module('seedApp').run(['$http', '$rootScope', '$state', '$stateParams', '$log',
	function($http, $rootScope, $state, $stateParams, $log) {

		// setup state params for ui-router
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

		// Debug stuff to view what ui-router is doing.
		// This block helps you understand how and why UI router is transitioning between states.
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			$log.debug('$stateChangeStart to ' + toState.name + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
		});
		$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
			$log.debug('$stateChangeError - fired when an error occurs during transition.');
			$log.debug(arguments);
		});
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			$log.debug('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
		});
		$rootScope.$on('$viewContentLoading', function(event, viewConfig) {
			$log.debug('$viewContentLoading - view begins loading - dom not rendered', viewConfig);
		});
		$rootScope.$on('$viewContentLoaded', function(event) {
			$log.debug('$viewContentLoaded - fired after dom rendered', event);
		});
		$rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
			$log.debug('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
			$log.debug(unfoundState, fromState, fromParams);
		});

		// extending Angular here.
		angular.isUndefinedOrNull = function(val) {
			return angular.isUndefined(val) || val === null;
		};

		angular.stringStartsWith = function(input, startsWith) {
			return input.indexOf(startsWith) === 0;
		};

		//Extend Lo-dash
		// Setup global access to an enhanced version of lodash's pluck. this accepts string.nested.object.properties.
		_.mixin({
			pluck: function(obj, key) {
				if (key.indexOf(".") === -1) {
					return _.map(obj, function(value) {
						return value[key];
					});
				}
				var keys = key.split(".").reverse();
				while (keys.length) {
					obj = _.pluck(obj, keys[keys.length - 1]);
					keys.pop();
				}
				return obj;
			}
		});

	}
]);