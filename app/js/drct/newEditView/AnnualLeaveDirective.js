myApp.directive('annualLeaveDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '=',
            annualLeave: '='
        },
        templateUrl: '../../../view/drct/newEditView/annual-leave-directive.html',
        controller: [
            '$scope',
            ($scope) => {
                $scope.getEntityAddress = 'annualLeave';
                $scope.entity = $scope.annualLeave;
                if (!$scope.isNew && $scope.annualLeave.annualLeaveStartDate) {
                    $scope.annualLeave.annualLeaveStartDate = new Date($scope.annualLeave.annualLeaveStartDate);
                }
                if (!$scope.isNew && $scope.annualLeave.annualLeaveEndDate) {
                    $scope.annualLeave.annualLeaveEndDate = new Date($scope.annualLeave.annualLeaveEndDate);
                }
                if (!$scope.isNew && $scope.annualLeave.jobStartDate) {
                    $scope.annualLeave.jobStartDate = new Date($scope.annualLeave.jobStartDate);
                }
            }
        ]
    }
});