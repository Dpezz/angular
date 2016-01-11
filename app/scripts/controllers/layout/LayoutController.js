angular
    .module('app')
    .controller('LayoutController', LayoutController);

    function LayoutController($mdSidenav, $state, $methodService) {
        var vm = this;
        vm.error;
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
            data: '',
            img: '/assets/img/matthew.png'
        }

        //get user
        $methodService.get('/authenticate',{})
        .then(function(response) {
            vm.user.data = response.user;        
        })
        .catch(function(error){
            vm.error = error;
        })

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