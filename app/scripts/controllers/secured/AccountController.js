angular
    .module("app")
    .controller("AccountController", AccountController);

    function AccountController($scope) {
    	//Set title sub-toolbar
    	var item = {isBack:false, isNew:false, label:"Account"}
        titleSubToolbar($scope, item)
    }