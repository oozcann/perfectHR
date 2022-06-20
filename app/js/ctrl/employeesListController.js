myApp.controller('employeesListController', ['$scope', '$state','$stateParams','$http', '$rootScope', '$window',
    function ($scope, $state,$stateParams, $http, $rootScope, $window) {
  
    $scope.goToNewEmployeePage = function () {

        $state.go('new-employee',{});

    };
    $rootScope.$emit('employees');
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
        getEmployees($scope.archivedEmployee);
    };
    getEmployees(false);
    function getEmployees(archived) {
        $http.get("/api/employee/list").then(function (response) {
            
            $scope.emp = response.data;
            $scope.employees = [];
            for (let i = 0; i<$scope.emp.length; i++) {
                if ($scope.emp[i].archived == archived) {
                    $scope.employees.push($scope.emp[i]);
                }
            }       
            
        });	
    };
    }]);


