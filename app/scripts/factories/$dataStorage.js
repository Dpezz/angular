angular
    .module('app')
    .factory('$dataStorage', $dataStorage);

    function $dataStorage($auth, $localStorage, $restApi) {
        return {
            set: function(){
                $restApi.invoke('GET', '/authenticate',{})
                .then(function(response) {
                    var user = response.data.user;
                    $localStorage.user = user;
                })
                .catch(function(error){
                })
            },

            get: function(){
                return $localStorage.user;
            }
        }
    }