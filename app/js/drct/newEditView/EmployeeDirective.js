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