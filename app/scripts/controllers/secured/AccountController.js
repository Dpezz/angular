angular
    .module("app")
    .controller("AccountController", AccountController);

    function AccountController($scope) {
    	//Set title sub-toolbar
    	var item = { backUrl:'app.account', newUrl:'app.account', label:"Account" };
        $titleSubToolbar($scope, item);
    }