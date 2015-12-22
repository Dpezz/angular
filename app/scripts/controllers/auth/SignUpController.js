angular
    .module("app")
    .controller("SignUpController", SignUpController);

    function SignUpController($auth, $location) {
        var vm = this;
        vm.signup = function() {
            $auth.signup({
                name: vm.name,
                email: vm.email,
                password: vm.password
            })
            .then(function() {
                // Si se ha registrado correctamente,
                // Podemos redirigirle a otra parte
                $location.path("/account");
            })
            .catch(function(response) {
                // Si ha habido errores, llegaremos a esta función
            });
        }
    }