angular
    .module("app")
    .controller("LogoutController", LogoutController);

    function LogoutController($auth, $localStorage, $location) {
    	$auth.logout()
        .then(function() {
            // Desconectamos al usuario y lo redirijimos
            $localStorage.$reset();
            $location.path("/login");
        });
    }
