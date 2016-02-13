angular
    .module("app")
    .controller("UserController", UserController);

function UserController($scope, $state, $stateParams, $titleSubToolbar, $userService, $toastMsg) {
    var vm = this;
    vm.error;
    vm.user = {};
    vm.id = ($stateParams.id != '') ? $stateParams.id : null;

    //Set title sub-toolbar
    vm.type = (vm.id) ? 'Edit' : 'New';
    var item = {
        backUrl: 'app.users',
        newUrl: '',
        label: "User " + vm.type
    };
    $titleSubToolbar.set($scope, item);
    //end_set

    //get user
    if (vm.id) {
        $userService.get('/users/' + vm.id)
            .then(function(response) {
                vm.user = response.user;
            })
            .catch(function(error) {
                vm.error = error;
            })
    }
    //end_get

    vm.save = function() {
        if (vm.id) {
            $userService.put('/users/' + vm.id, vm.user)
                .then(function(response) {
                    vm.user = response.user;
                })
                .catch(function(error) {
                    vm.error = error;
                })
        } else {
            $userService.post('/users', vm.user)
                .then(function(response) {
                    vm.user = response.user;
                })
                .catch(function(error) {
                    vm.error = error;
                })
        }
    }
}
