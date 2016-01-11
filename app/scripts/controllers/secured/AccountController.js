angular
    .module("app")
    .controller("AccountController", AccountController);

    function AccountController($scope, $state, $titleSubToolbar, $methodService, $toastMsg) {
    	var vm = this;
        vm.error;
    	vm.user = {};

    	//Set title sub-toolbar
    	var item = { backUrl:'app.users', newUrl:'', label:"Account"};
        $titleSubToolbar.set($scope, item);

        //get user
        $methodService.get('/authenticate')
            .then(function(response) {
                vm.user = response.user;        
            })
            .catch(function(error){
                vm.error = error;
            })
        //end_get

        vm.save = function(){
            //PUT User
            $methodService.put('/users/'+ vm.user.id, vm.user)
            .then(function(response) {
                vm.user = response.user;
                $toastMsg.action();
            })
            .catch(function(error){
                vm.error = error;
            })
        }
    }