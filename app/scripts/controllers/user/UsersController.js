angular
    .module("app")
    .controller("UsersController", UsersController);

    function UsersController($scope, $state, $titleSubToolbar, $methodService, $toastMsg) {
    	var vm = this;
        vm.error;
        vm.users = [];
    	vm.selected = [];

    	//Set title sub-toolbar
    	var item = { backUrl:'', newUrl:'app.user', label:"Users"};
        $titleSubToolbar.set($scope, item);

        //get user
        $methodService.getAll('/users')
            .then(function(response) {
                vm.users = response.users;        
            })
            .catch(function(error){
                vm.error = error;
            })
        //end_get

        vm.show = function(user){
        	$state.go('app.user', {'id': user.id})
        }
        vm.delete = function(){
        	$state.go('app.account')
        }
    }
