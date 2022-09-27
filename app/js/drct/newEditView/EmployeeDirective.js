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
                $scope.getEntityAddress = 'employee';
                $scope.saveEmployee = function (data) {
                    if ($scope.isNew) {
                        entityService.saveEntity($scope.getEntityAddress ,JSON.stringify(data)).then((data) => {
                            $scope.employeeId = data._id;
                            $scope.redirectAfterSave();
                        });
                    } else {
                        entityService.updateEntity($scope.getEntityAddress, JSON.stringify(data)).then(() => {
                            $scope.beingEdited = false;
                        });

                    }

                };
                $scope.deleteEmployee = function () {
                    const bootboxOpts = {};
                    bootboxOpts.title = 'Devam etmek için onayınız gerekmektedir';
                    bootboxOpts.message = 'Çalışanı arşivlemek istediğinize emin misiniz? Arşivlenmiş çalışanlara çalışan liste ekranından tekrar ulaşarak aktif edebilir veya kalıcı olarak silebilirsiniz.';
                    bootboxOpts.size = 'large'
                    bootboxOpts.closeButton = false;

                    bootboxOpts.buttons = {
                	    cancel: { label: 'Vazgeç', className: 'btn-success btn-square' },
                	    confirm: { label: 'Arşivle', className: 'btn-danger btn-square' }
                    };
                    bootboxOpts.buttons.confirm.callback = function () {
                        entityService.deleteEntity($scope.getEntityAddress, JSON.stringify($scope.employee)).then(function (response) {
                            $state.go('employees', {});
                        });
                    };
                    bootboxOpts.buttons.cancel.callback = function () {};
                    bootbox.dialog(bootboxOpts);
                };
                $scope.removeEmployee = function () {
                    const bootboxOpts = {};
                    bootboxOpts.title = 'Devam etmek için onayınız gerekmektedir';
                    bootboxOpts.message = 'Çalışanı kalıcı olarak silmek istediğinize emin misiniz? Bu işlem geri alınamaz!';
                    bootboxOpts.size = 'large'
                    bootboxOpts.closeButton = false;

                    bootboxOpts.buttons = {
                        cancel: { label: 'Vazgeç', className: 'btn-success btn-square' },
                        confirm: { label: 'Kalıcı Olarak Sil', className: 'btn-danger btn-square' }
                    };
                    bootboxOpts.buttons.confirm.callback = function () {
                        entityService.removeEntity($scope.getEntityAddress, JSON.stringify($scope.employee)).then(() => {
                            $state.go('employees', {});
                        });
                    };
                    bootboxOpts.buttons.cancel.callback = function () {};
                    bootbox.dialog(bootboxOpts);
                };
                $scope.activateEmployee = function () {
                    entityService.activateEntity($scope.getEntityAddress, JSON.stringify($scope.employee)).then(() => {
                        $state.go($state.current, {}, {reload: true});
                    });
                };
                $scope.editEmployee = function () {
                    $scope.beingEdited = true;
                };
                $scope.cancel = function () {
                    if ($scope.isNew) {
                        $state.go('employees');
                    } else {
                        $scope.beingEdited = false;
                        $state.go($state.current, {}, {reload: true});
                    }
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