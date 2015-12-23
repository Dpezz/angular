angular
  .module("app", [
    "ui.router",
    "satellizer",
    "ngMaterial",
    "ngAnimate",
    "ngAria"
    ])

  .config(function($urlRouterProvider, $authProvider, $httpProvider, $provide, options) {
    // Parametros de configuración
    $urlRouterProvider.otherwise('/login');
    $authProvider.loginUrl = options.endpoint_api + "/authenticate";
    $authProvider.signupUrl = options.endpoint_api + "/register";
    $authProvider.tokenName = "token";
    $authProvider.tokenPrefix = "user";

	  // Push the new factory onto the $http interceptor array
	  $httpProvider.interceptors.push('redirectWhenLoggedOut');
  })

	.run(function($rootScope, $state) {
		stateChangeStart($rootScope, $state);
	});



