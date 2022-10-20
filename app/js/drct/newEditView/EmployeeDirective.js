myApp.directive('employeeDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '=',
            employee: '=',
            companies: '='
        },
        templateUrl: '../../../view/drct/newEditView/employee-directive.html',
        controller: [
            '$scope',
            'referenceService',
            ($scope,referenceService) => {
                $scope.getEntityAddress = 'employee';
                $scope.entity = $scope.employee;
                if (!$scope.isNew) {
                    $scope.employeeCompanyRef = $scope.employee.companyRef._id;
                }
                $scope.createCompanyRef = function (companyRefId) {
                    referenceService.createEntityRef('company', companyRefId).then((data) => {
                        $scope.employee.companyRef = data;
                    });
                };
                if (!$scope.isNew && $scope.employee.dateOfBirth) {
                    $scope.employee.dateOfBirth = new Date($scope.employee.dateOfBirth);
                }
                if (!$scope.isNew && $scope.employee.jobStartDate) {
                    $scope.employee.jobStartDate = new Date($scope.employee.jobStartDate);
                }
            }
        ]
    }
});