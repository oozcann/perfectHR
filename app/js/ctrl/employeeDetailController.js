myApp.controller('employeeDetailController', ['$scope', '$state', '$stateParams','$http', '$rootScope',
    function ($scope, $state, $stateParams, $http, $rootScope) {
    $rootScope.$emit('employeeDetail');
    $http.get("/api/employee/list").then(function (response) {
        $scope.employees = response.data;
        for(i=0; i< $scope.employees.length; i++){
            if($scope.employees[i]._id == $stateParams.employeeId){
                $scope.selectedEmployee = $scope.employees[i];
                if($scope.selectedEmployee.gender == "E"){
                    $scope.showMaleImg = true;
                }
                if($scope.selectedEmployee.gender == "K"){
                    $scope.showFemaleImg = true;
                }
                if($scope.selectedEmployee.archived == true){
                    $scope.activated = true;
                }
            }            
        }
        $scope.openEditPage = function(){
            $state.go('edit-employee',{
                id:$scope.selectedEmployee.id
            });     
        }
        $scope.openDeletePage = function(){
            $state.go('delete-employee',{
                id:$scope.selectedEmployee.id
            });
        }
        $scope.openActivatePage = function(){
            $state.go('activate-employee',{
                id:$scope.selectedEmployee.id
            });
        }

    });

    $scope.openAddingDay = function(){        
        $scope.showAddingDay = true;
    }
    $scope.closeAddingDay = function(){        
        $scope.showAddingDay = false;
    }
    

    


}]);


