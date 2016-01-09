angular
    .module('app')
    .controller('LayoutController', LayoutController);

    function LayoutController($mdSidenav, $state, $dataStorage) {
        var vm = this;

        vm.breadCrumb = {
            label: 'Default',
            icon: ''
        };

        vm.btnBack = {
            active:false,
            url: ''
        };

        vm.btnNew = {
            active:false,
            url: ''
        };

        vm.user = {
            data: $dataStorage.get(),
            img: '/assets/img/matthew.png'
        }

        vm.close = function () {
            $mdSidenav('left').close();
        };
        vm.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };
        vm.toggleRight = function () {
            $mdSidenav('right').toggle();
        };

        vm.back =function(){
            $state.go(vm.btnBack.url);
        };

        vm.new =function(){
            $state.go(vm.btnNew.url);
        };
    }