angular
    .module('app')
    .service('$dataStorage', dataStorage);

    function dataStorage($auth, $http, options) {
           $http.get(options.endpoint_api +'/authenticate?token='+ $auth.getToken())
            .then(function(response) {
                // Stringify the returned data to prepare it
                // to go into local storage
                var user = JSON.stringify(response.data.user);
                // Set the stringified user data into local storage
                localStorage.setItem('user', user);
            })
            .catch(function(error){
            })
    }