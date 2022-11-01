myApp.directive('employeesList', function(){

    return {
        restrict : "A",
        scope: {
            employees: '=',
            hideArchivedDataButton: '@'
        },
        templateUrl: '../../../view/drct/list/employees-list.html',
        controller: [
            '$scope',
            'entityService',
            ($scope,entityService) => {
                $scope.getEntityAddress = 'employee';

                $scope.archivedEmployee = false;
                $scope.showHideArchivedEmployees = "Arşivli";
                $scope.btnClass = "btn-danger";
                $scope.toggleArchivedEmployee = function () {
                    $scope.archivedEmployee = !$scope.archivedEmployee;
                    if ($scope.archivedEmployee) {
                        $scope.showHideArchivedEmployees = "Aktif";
                        $scope.btnClass = "btn-success";
                    } else {
                        $scope.showHideArchivedEmployees = "Arşivli";
                        $scope.btnClass = "btn-danger";
                    }
                    $scope.getEmployees($scope.archivedEmployee);
                };
                $scope.getEmployees = function (isArchived) {
                    const query = {archived: isArchived};
                    entityService.getList($scope.getEntityAddress, query).then((data)=>{
                        $scope.employees= data;
                    });
                };
            }
        ]
    }
});