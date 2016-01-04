angular
    .module('app')
    .service('stateChangeStart', stateChangeStart);

    function stateChangeStart($rootScope, $location, $auth) {
    	// $stateChangeStart is fired whenever the state changes. We can use some parameters
		// such as toState to hook into details about the state as it is changing
		$rootScope.$on('$stateChangeStart', function(event, toState) {
            var urls = ['login', '', 'register'];
            angular.forEach(urls, function(value, key) {
                if($auth.isAuthenticated() && toState.name === value){
                    $location.path("/account");
                    return
                }
            })
        })
    }