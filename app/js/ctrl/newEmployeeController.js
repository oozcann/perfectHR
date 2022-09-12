myApp.controller('newEmployeeController', ['$scope', '$state', '$stateParams','$http','$rootScope',
    function ($scope, $state, $stateParams, $http, $rootScope) {

    $scope.goBack = function () {
        $state.go('home', {})
    };
    $rootScope.$emit('newEmployee');
    $scope.breadcrumbItems = [
        {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
        {name: "Çalışanlar", link:"#!/employees"},
        {name: "Yeni Çalışan", link:""}
    ];
    $scope.saveEmployee = function (data) {
        $http.post('/api/employee/save', JSON.stringify(data)).then(function (response) {
            console.log(response);
            $scope.employeeId = response.data._id;
        });
        
        const bootboxOpts = {};
		bootboxOpts.title = '';
        bootboxOpts.message = 'Çalışan Kaydedilmiştir!';
        bootboxOpts.centerVertical  = true;
        bootboxOpts.closeButton = false;
						
		bootboxOpts.buttons = {
			cancel: { label: 'Anasayfa', className: 'btn-danger' },
			confirm: { label: 'Çalışan Detayına Git', className: 'btn-success' }
		};
		bootboxOpts.buttons.confirm.callback = function () {
			$state.go('employee', {
                employeeId: $scope.employeeId
            })
		};
		bootboxOpts.buttons.cancel.callback = function () {
			$state.go('home', {})
		};
		bootbox.dialog(bootboxOpts);				
    
    };
    
}]);


