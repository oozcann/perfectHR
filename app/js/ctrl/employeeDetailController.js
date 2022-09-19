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
    $scope.editEmployee = function () {
        $state.go('edit-employee', {
            employeeId: $stateParams.employeeId
        })
    };
    $scope.deleteEmployee = function () {
        const bootboxOpts = {};
		bootboxOpts.title = 'Devam etmek için onayınız gerekmektedir';
        bootboxOpts.message = 'Çalışanı arşivlemek istediğinize emin misiniz? Arşivlenmiş çalışanlara çalışan liste ekranından tekrar ulaşarak aktif edebilir veya kalıcı olarak silebilirsiniz.';
        bootboxOpts.size = 'large'
        bootboxOpts.closeButton = false;
						
		bootboxOpts.buttons = {
			cancel: { label: 'Vazgeç', className: 'btn-success' },
			confirm: { label: 'Arşivle', className: 'btn-danger' }
		};
		bootboxOpts.buttons.confirm.callback = function () {
			$http.post('/api/employee/delete', JSON.stringify($scope.selectedEmployee)).then(function (response) {
                $state.go('employees', {})
            });	
		};
		bootboxOpts.buttons.cancel.callback = function () {
			
		};
		bootbox.dialog(bootboxOpts);		
        		
    };
    $scope.activateEmployee = function () {
		$http.post('/api/employee/activate', JSON.stringify($scope.selectedEmployee)).then(function (response) {
            $state.go($state.current, {}, {reload: true});
        });			
        		
    };
    $scope.openAddingDay = function(){        
        $scope.showAddingDay = true;
    }
    $scope.closeAddingDay = function(){        
        $scope.showAddingDay = false;
    }
    

    


}]);


