angular
    .module("app")
    .controller("UsersController", UsersController);

function UsersController($scope, $state, $titleSubToolbar, $userService, $toastMsg) {
    var vm = this;
    vm.error;
    vm.users = [];
    vm.selected = [];

    vm.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    //Set title sub-toolbar
    var item = {
        backUrl: '',
        newUrl: 'app.user',
        label: "Users"
    };
    $titleSubToolbar.set($scope, item);

    //get user
    $userService.all('/users')
        .then(function(response) {
            vm.users = response.users;
        })
        .catch(function(error) {
            vm.error = error;
        })
        //end_get

    vm.show = function(user) {
        $state.go('app.user', {
            'id': user.id
        })
    }
    vm.delete = function() {
        $state.go('app.account')
    }



    //table functions
    vm.onPaginate = function(page, limit) {
        getDesserts(angular.extend({}, vm.query, {
            page: page,
            limit: limit
        }));
    };

    vm.onReorder = function(order) {
        getDesserts(angular.extend({}, vm.query, {
            order: order
        }));
    };
}
