angular
    .module('app')
    .factory('$dataStorage', $dataStorage);

function $dataStorage($auth, $localStorage, $restApi) {
    return {
        set: function() {
            var user = {};
            $restApi.invoke('GET', '/authenticate', {})
                .then(function(response) {
                    user = response.data.user;
                    $localStorage.user = user;
                })
                .catch(function(error) {
                    return error;
                })
        }
    }
}
