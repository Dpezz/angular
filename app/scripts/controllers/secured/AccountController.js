angular
    .module("app")
    .controller("AccountController", AccountController);

    function AccountController($scope, $titleSubToolbar, $restApi) {
    	var vm = this;
    	vm.user = {};

    	//Set title sub-toolbar
    	var item = { backUrl:'app.account', newUrl:'', label:"Account"};
        $titleSubToolbar.set($scope, item);


        //get UserName
        $restApi.invoke('GET', '/authenticate',{})
        .then(function(response) {
            vm.user = response.data.user;        
        })
        .catch(function(error){
            return error;
        })
    }