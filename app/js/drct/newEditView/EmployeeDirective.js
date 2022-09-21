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
            ($scope,$state,$stateParams,$http,$rootScope) => {

                $scope.goBack = function () {
                    $state.go('home', {})
                };
                $rootScope.$emit('newEmployeeBreadcrumb');
                $scope.saveEmployee = function (data) {
                    $http.post('/api/employee/save', JSON.stringify(data)).then(function (response) {
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

            }
        ]
    }
});