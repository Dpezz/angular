angular
    .module('app')
    .service('$setHeaders', $setHeaders);

function $setHeaders($auth, $restApi, options) {
    $restApi.$on("beforeSend", function(headers) {
        $restApi.setEndpoint(options.endpoint_api);

        //SET AUTHORIZATION HEADER IF USER IS AUTHENTICATED
        if ($auth.isAuthenticated()) {
            var jwt = $auth.getToken();
            var type = 'Bearer';
            headers['Authorization'] = type + " " + jwt;
        }
    });
}
