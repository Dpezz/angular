angular
    .module("app")
    .controller("AuthController", AuthController);

    function AuthController($auth, $location, $rootScope) {
        var vm = this;
        vm.authError = false;
        vm.authErrorText;

        vm.login = function(){
            $auth.login({
                email: vm.email,
                password: vm.password
            })
            .then(function(){
                // Si se ha logueado correctamente, lo tratamos aquí.
                // Podemos también redirigirle a una ruta
                $location.path("/account")
            })
            .catch(function(error){
                // Si ha habido errores llegamos a esta parte
                vm.authError = true;
                vm.authErrorText = error.data.error;
            });
        }
    }

