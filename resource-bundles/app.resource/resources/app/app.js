// This is the master application module definition file. 
// While it's safe to leave alone, if you want to add or remove 
// external modules for use in your app you'll need to add them here.
// 
// Note: the angular.module() method is both a getter and a setter. 
// Yay for ambiguity. Regardless, if you specify a string, say 'seedApp'
// and follow it with an array of strings, it acts as a *setter*, defining
// the module. 
// 
// The modules listed here are included as an example, and as an opinioned
// starting point for well done, beautiful angular apps. 

angular.module('seedApp', [ // <-- your app name.
	'ui.bootstrap', // bootstrap directives
	'ui.utils', // Ui-Utils
	'ui.router', // Ui-Router
	'ngAnimate', // Pretty animations
	'ngForce', // Salesforce integration library
	'angular-growl', // Pretty Messages
	'ngMessages', // pretty form messages
	'angular-ladda' // Dynamic Action buttons
]);