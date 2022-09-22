myApp.directive('employeeDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            employee: '='
        },
        templateUrl: '../../../view/drct/newEditView/employee-directive.html',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$http',
            '$rootScope',
            'entityService',
            ($scope,$state,$stateParams,$http,$rootScope,entityService) => {

                $scope.goBack = function () {
                    $state.go('home', {})
                };
                $rootScope.$emit('newEmployeeBreadcrumb');
                $scope.saveEmployee = function (data) {
                    entityService.saveEntity('employee/save',JSON.stringify(data)).then((data) => {
                        $scope.employeeId = data._id;
                        $scope.redirectAfterSave();
                    });
                };
                $scope.redirectAfterSave = function () {
                    $state.go('employee', {
                        employeeId: $scope.employeeId
                    })
                };

            }
        ]
    }
});