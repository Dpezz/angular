angular
    .module("app")
    .config(routes);

function routes($stateProvider) {
    // Configuración de las rutas/estados
    $stateProvider
    //Auth
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
        //Layout
        .state('app', {
            templateUrl: '../views/layout/_navbar_view.html',
            controller: "LayoutController",
            controllerAs: "layout",
            abstract: true
        })
        //Secured
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
        //Users
        .state('app.users', {
            url: '/users',
            views: {
                content: {
                    templateUrl: '../views/user/index_view.html',
                    controller: 'UsersController',
                    controllerAs: "vm"
                }
            }
        })
        .state('app.user', {
            url: '/users/:id',
            views: {
                content: {
                    templateUrl: '../views/user/show_view.html',
                    controller: 'UserController',
                    controllerAs: "vm"
                }
            }
        })
}
