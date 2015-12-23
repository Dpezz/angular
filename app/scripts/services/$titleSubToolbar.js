angular
    .module('app')
    .service('$titleSubToolbar', titleSubToolbar);

    function titleSubToolbar($scope, $item) {
    	var parentScope = $scope.$parent;
        parentScope.child = $scope;
        parentScope.layout.breadCrumb.isBack = $item.isBack;
        parentScope.layout.breadCrumb.isNew = $item.isNew;
        parentScope.layout.breadCrumb.label = $item.label;
        parentScope.layout.breadCrumb.icon = $item.icon;
    }