angular
    .module("app", [
        "ui.router",
        "satellizer",
        "ngMaterial",
        "ngAnimate",
        "ngAria"
        ])
    .constant('options', {
       endpoint_api: 'http://localhost:8000/api/v1'
    })

    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal', {
          'default': '600', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('teal', {
          'default': '900' // use shade 200 for default, and keep all other shades the same
        });
    })

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



