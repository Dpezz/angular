angular
    .module("app")
    .config(function($stateProvider) {
        
		// Configuración de las rutas/estados
        $stateProvider
            .state("login", {
                url: "/login",
                templateUrl: "../views/auth/login_view.html",
                controller: "AuthController",
                controllerAs: "auth"
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "../views/auth/signup_view.html",
                controller: "SignUpController",
                controllerAs: "signup"
            })
            .state("logout", {
                url: "/logout",
                templateUrl: null,
                controller: "LogoutController",
            })
            .state('app', {
                templateUrl: '../views/layout/_navbar_view.html',
                controller: "LayoutController",
                controllerAs: "layout",
                abstract: true
            })
            .state('app.account', {
                url: '/account',
                views: {
                    content: {
                        templateUrl: '../views/secured/account_view.html',
                        controller: 'AccountController',
                        controllerAs: "account"
                    }
                }
            })
    })