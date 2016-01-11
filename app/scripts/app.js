angular
  .module("app", [
    "ui.router",
    "satellizer",
    "ngMaterial",
    "ngAnimate",
    "ngStorage",
    "md.data.table"
    ])

    .config(function($authProvider, $urlRouterProvider, $httpProvider, $provide, options) {
        // Parametros de configuración
        $urlRouterProvider.otherwise('/login');
        $authProvider.loginUrl = options.endpoint_api + "/authenticate";
        //$authProvider.loginUrl = options.endpoint_api_login + "/login_check";
        $authProvider.signupUrl = options.endpoint_api + "/register";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "user";

        // Push the new factory onto the $http interceptor array
        $httpProvider.interceptors.push('redirectWhenLoggedOut');
    })

    .run(function($rootScope, $location, $auth, $restApi, options) {
        $stateChangeStart($rootScope, $location, $auth);
        $setHeaders($auth, $restApi, options);
    })




