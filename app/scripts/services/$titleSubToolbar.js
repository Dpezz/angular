angular
    .module('app')
    .service('$titleSubToolbar', $titleSubToolbar);

    function $titleSubToolbar() {
        this.set = function($scope, item){
            var parentScope = $scope.$parent;
            parentScope.child = $scope;
            //btn back
            parentScope.layout.btnBack.active = (item.backUrl != '')?true:false;
            parentScope.layout.btnBack.url = item.backUrl;
            //btn new
            parentScope.layout.btnNew.active = (item.newUrl != '')?true:false;
            parentScope.layout.btnNew.url = item.newUrl;
            //title secondary
            parentScope.layout.breadCrumb.label = item.label;
            parentScope.layout.breadCrumb.icon = item.icon;
        }
    }