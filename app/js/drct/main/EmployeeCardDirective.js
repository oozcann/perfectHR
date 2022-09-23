myApp.directive('employeeCard', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            employee: '='
        },
        templateUrl: '../../../view/drct/main/employee-card-directive.html',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$http',
            '$rootScope',
            'entityService',
            ($scope,$state,$stateParams,$http,$rootScope,entityService) => {
                if($scope.employee.gender == "K"){
                    $scope.showFemaleImg = true;
                }
                if($scope.employee.gender == "E"){
                    $scope.showMaleImg = true;
                }

            }
        ]
    }
});