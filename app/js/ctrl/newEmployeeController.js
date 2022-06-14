myApp.controller('newEmployeeController', ['$scope', '$state', '$stateParams','$http',
    function ($scope, $state, $stateParams, $http) {

    $scope.goBack = function () {

            $state.go('home', {})


    };
    $scope.saveEmployee = function (data) {
        $http.post('/api/employee/save', JSON.stringify(data)).then(function (response) {
        
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
			bootbox.alert('Çalışan Detayı');
		};
		bootboxOpts.buttons.cancel.callback = function () {
			$state.go('home', {})
		};
		bootbox.dialog(bootboxOpts);				
        
    };
    
}]);


