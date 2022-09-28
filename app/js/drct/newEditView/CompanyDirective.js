myApp.directive('companyDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '=',
            company: '='
        },
        templateUrl: '../../../view/drct/newEditView/company-directive.html',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$http',
            '$rootScope',
            'entityService',
            ($scope,$state,$stateParams,$http,$rootScope,entityService) => {
                $scope.getEntityAddress = 'company';
                $scope.entity = $scope.company;
                $scope.saveCompany = function (data) {
                    if ($scope.isNew) {
                        entityService.saveEntity($scope.getEntityAddress ,JSON.stringify(data)).then((data) => {
                            $scope.companyId = data._id;
                            $scope.redirectAfterSave();
                        });
                    } else {
                        entityService.updateEntity($scope.getEntityAddress, JSON.stringify(data)).then(() => {
                            $scope.beingEdited = false;
                        });

                    }

                };
                $scope.deleteCompany = function () {
                    const bootboxOpts = {};
                    bootboxOpts.title = 'Devam etmek için onayınız gerekmektedir';
                    bootboxOpts.message = 'Firmayı arşivlemek istediğinize emin misiniz? Arşivlenmiş firmalara, firma liste ekranından tekrar ulaşarak aktif edebilir veya kalıcı olarak silebilirsiniz.';
                    bootboxOpts.size = 'large'
                    bootboxOpts.closeButton = false;

                    bootboxOpts.buttons = {
                        cancel: { label: 'Vazgeç', className: 'btn-success btn-square' },
                        confirm: { label: 'Arşivle', className: 'btn-danger btn-square' }
                    };
                    bootboxOpts.buttons.confirm.callback = function () {
                        entityService.deleteEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(function (response) {
                            $state.go('companies', {});
                        });
                    };
                    bootboxOpts.buttons.cancel.callback = function () {};
                    bootbox.dialog(bootboxOpts);
                }
                $scope.removeCompany = function () {
                    const bootboxOpts = {};
                    bootboxOpts.title = 'Devam etmek için onayınız gerekmektedir';
                    bootboxOpts.message = 'Firmayı kalıcı olarak silmek istediğinize emin misiniz? Bu işlem geri alınamaz!';
                    bootboxOpts.size = 'large'
                    bootboxOpts.closeButton = false;

                    bootboxOpts.buttons = {
                        cancel: { label: 'Vazgeç', className: 'btn-success btn-square' },
                        confirm: { label: 'Kalıcı Olarak Sil', className: 'btn-danger btn-square' }
                    };
                    bootboxOpts.buttons.confirm.callback = function () {
                        entityService.removeEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(() => {
                            $state.go('companies', {});
                        });
                    };
                    bootboxOpts.buttons.cancel.callback = function () {};
                    bootbox.dialog(bootboxOpts);
                };
                $scope.activateCompany = function () {
                    entityService.activateEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(() => {
                        $state.go($state.current, {}, {reload: true});
                    });
                };
                $scope.edit = function() {
                    $scope.beingEdited = true;
                }
                $scope.cancel = function () {
                    if ($scope.isNew) {
                        $state.go('companies');
                    } else {
                        $scope.beingEdited = false;
                        $state.go($state.current, {}, {reload: true});
                    }
                };
                $scope.redirectAfterSave = function () {
                    $state.go('company', {
                        companyId: $scope.companyId,
                        justSaved: true
                    })
                };
            }
        ]
    }
});