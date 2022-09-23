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
                $scope.saveEmployee = function (data) {
                    entityService.saveEntity('employee/save',JSON.stringify(data)).then((data) => {
                        $scope.employeeId = data._id;
                        $scope.redirectAfterSave();
                    });
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
                        entityService.deleteEntity('employee/delete', JSON.stringify($scope.employee)).then(function (response) {
                        $state.go('employees', {})
                    });
                    };
                    bootboxOpts.buttons.cancel.callback = function () {};
                    bootbox.dialog(bootboxOpts);
                };
                $scope.activateEmployee = function () {
                    entityService.activateEntity('employee', JSON.stringify($scope.employee)).then(() => {
                        $state.go($state.current, {}, {reload: true});
                    });
                };
                $scope.editEmployee = function () {
                    $scope.beingEdited = true;
                };
                $scope.cancel = function () {
                    $scope.beingEdited = false;
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