myApp.directive('bonusDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '='
        },
        templateUrl: '../../../view/drct/newEditView/bonus-directive.html',
        controller: [
            '$scope',
            ($scope) => {
                $scope.getEntityAddress = 'bonus';
                $scope.entity = $scope.bonus;
            }
        ]
    }
});