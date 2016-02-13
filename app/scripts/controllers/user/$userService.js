angular
    .module('app')
    .service('$userService', $userService)

function $userService($restApi, $q) {
    return {
        all: function(url, filter) {
            return $q(function(resolve, reject) {
                var filterString = '?';
                if (filter !== '' || filter !== {} || filter !== null) {
                    _.forEach(filter, function(n, key) {
                        filterString += '$' + key + '=' + n + '&';
                    });
                }
                $restApi.invoke('GET', url + filterString, {})
                    .then(function(response) {
                        resolve(response.data);
                    }).catch(function(error) {
                        reject(error);
                    });
            });
        },

        get: function(url, data) {
            return $q(function(resolve, reject) {
                $restApi.invoke('GET', url, data)
                    .then(function(response) {
                        resolve(response.data);
                    }).catch(function(error) {
                        reject(error);
                    });
            });
        },

        post: function(url, data) {
            return $q(function(resolve, reject) {
                $restApi.invoke('POST', url, data)
                    .then(function(response) {
                        resolve(response.data);
                    }).catch(function(error) {
                        reject(error);
                    });
            });
        },

        put: function(url, data) {
            return $q(function(resolve, reject) {
                $restApi.invoke('PUT', url, data)
                    .then(function(response) {
                        resolve(response.data);
                    }).catch(function(error) {
                        reject(error);
                    });
            });
        },

        delete: function(url, data) {
            return $q(function(resolve, reject) {
                $restApi.invoke('DELETE', url, {})
                    .then(function(response) {
                        resolve(response.data);
                    }).catch(function(error) {
                        reject(error);
                    });
            });
        }
    };
};
