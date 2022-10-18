myApp.directive('entityListMain', function(){

    return {
        restrict : "A",
        scope: {
            headerItems: '='
        },
        templateUrl: '../../../view/drct/list/entity-list-main-directive.html',
        controller: [
            '$scope',
            'entityService',
            ($scope,entityService) => {
                console.log("headerItems: " + $scope.headerItems);
            }
        ]
    }
});