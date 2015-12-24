angular
    .module("app")
    .controller("LogoutController", LogoutController);

    function LogoutController($auth, $location) {
    	$auth.logout()
        .then(function() {
            // Desconectamos al usuario y lo redirijimos
            localStorage.removeItem('user')
            $location.path("/login")
        });
    }
