angular
    .module('app')
    .controller('LayoutController', LayoutController);

    function LayoutController($mdSidenav) {
        var vm = this

        vm.breadCrumb = {
            isBack: false,
            isNew: false,
            label: 'Default'
        };

        vm.close = function () {
            $mdSidenav('left').close();
        };
        vm.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };
        vm.toggleRight = function () {
            $mdSidenav('right').toggle();
        };
    }