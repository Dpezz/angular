angular
    .module('app')
    .service('$methodService', $methodService)

    function $methodService($localStorage, $log, $restApi, $q) {

        function getAll(url, filter) {
            return $q(function (resolve, reject) {
                var filterString = '?';
                if (filter !== '' || filter !== {} || filter !== null) {
                    _.forEach(filter, function (n, key) {
                        filterString += '$' + key + '=' + n + '&';
                    });
                }
                $restApi.invoke('GET', url + filterString, {})
                    .then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
            });
        }

        function get(url, data) {
            return $q(function (resolve, reject) {
                $restApi.invoke('GET', url, data)
                .then(function (response) {
                    resolve(response.data);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        function post(url, data) {
            return $q(function (resolve, reject) {
                $restApi.invoke('POST', url, data)
                    .then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
            });
        }

        function put(url, data) {
            return $q(function (resolve, reject) {
                $restApi.invoke('PUT', url, data)
                    .then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
            });
        }

        function remove(url, data) {
            return $q(function (resolve, reject) {
                $restApi.invoke('DELETE', url, {})
                    .then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
            });
        }

        return {
            getAll: getAll,
            get: get,
            post: post,
            put: put,
            delete: remove,
        };
    };