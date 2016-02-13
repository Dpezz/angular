angular
    .module("app")
    .controller("SignUpController", SignUpController);

function SignUpController($auth, $location) {
    var vm = this;
    vm.authLoad = false;
    vm.authError = false;
    vm.authErrorText;

    vm.signup = function() {
        vm.authLoad = true;
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
            .catch(function(error) {
                // Si ha habido errores, llegaremos a esta función
                vm.authError = true;
                vm.authErrorText = error.data.error;
                vm.authLoad = false;
            });
    }
}
