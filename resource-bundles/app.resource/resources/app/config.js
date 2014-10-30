// This file contains the static configuration options needed by your application.
// In this example, we're adding a flag that enables / disables logging
// based on the presense of a &debug=true url param.
angular.module('seedApp').config(function($logProvider) {
	$logProvider.debugEnabled(window.debug);
});