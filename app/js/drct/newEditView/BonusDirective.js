myApp.directive('bonusDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '=',
            bonus: '='
        },
        templateUrl: '../../../view/drct/newEditView/bonus-directive.html',
        controller: [
            '$scope',
            ($scope) => {
                $scope.getEntityAddress = 'bonus';
                $scope.entity = $scope.bonus;
                if (!$scope.isNew && $scope.bonus.paymentDate) {
                    $scope.bonus.paymentDate = new Date($scope.bonus.paymentDate);
                }
            }
        ]
    }
});