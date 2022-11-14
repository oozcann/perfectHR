myApp.directive('bonusList', function(){

    return {
        restrict : "A",
        scope: {
            allBonus: '='
        },
        templateUrl: '../../../view/drct/list/bonus-list.html',
        controller: [
            '$scope',
            'entityService',
            ($scope,entityService) => {
                $scope.getEntityAddress = 'bonus';
            }
        ]
    }
});