myApp.directive('employeeDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '=',
            employee: '=',
            companies: '=',
            allBonus: '=',
            annualLeaves: '='
        },
        templateUrl: '../../../view/drct/newEditView/employee-directive.html',
        controller: [
            '$scope',
            'entityService',
            'referenceService',
            'rendererService',
            '$translate',
            ($scope,entityService,referenceService,rendererService,$translate) => {
                $scope.getEntityAddress = 'employee';
                $scope.entity = $scope.employee;
                if (!$scope.isNew && $scope.employee.dateOfBirth) {
                    $scope.employee.dateOfBirth = new Date($scope.employee.dateOfBirth);
                }
                if (!$scope.isNew && $scope.employee.jobStartDate) {
                    $scope.employee.jobStartDate = new Date($scope.employee.jobStartDate);
                }
                $scope.transferableCompanies = $scope.companies;
                if ($scope.employee && $scope.employee.companyRef && $scope.employee.companyRef._id) {
                    for (let i = 0; i < $scope.companies.length; i++) {
                        if ($scope.companies[i]._id == $scope.employee.companyRef._id) {
                            $scope.transferableCompanies.splice(i,1);
                        }
                    };
                }
                $scope.openTransferEmployee = false;
                $scope.showHideTransferEmployee = function () {
                    $scope.openTransferEmployee = !$scope.openTransferEmployee;
                }
                $scope.transferEmployee = function (toCompanyId) {
                    referenceService.createEntityRef('company', toCompanyId).then((data) => {
                        $scope.employee.companyRef = data;
                        entityService.updateEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(() => {
                            $scope.openTransferEmployee = !$scope.openTransferEmployee;
                        });
                    });

                };
                if ($scope.annualLeaves) {
                    let count = 0;
                    for (let i = 0; i < $scope.annualLeaves.length; i++) {
                        count += Number($scope.annualLeaves[i].daysInDiff);
                    }
                    $scope.employee.annualLeaveSpent = count;
                };
                console.log($translate.instant('BREADCRUMB.HOME'));
            }
        ]
    }
});