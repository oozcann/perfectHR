myApp.directive('archiveButton', function(){

    return {
        restrict : "A",
        scope: {
            beingEdited: '=',
            isNew: '=',
            entity: '='
        },
        templateUrl: '../../../view/drct/core/archive-button-directive.html',
        controller: [
            '$scope',
            '$state',
            'entityService',
            ($scope,$state,entityService) => {
                $scope.getEntityAddress = $scope.entity._class;
                if ($scope.getEntityAddress == 'employee') {
                    $scope.entityTypeName = 'Çalışan';
                    $scope.redirectToState = 'employees';
                }
                else if ($scope.getEntityAddress == 'company') {
                    $scope.entityTypeName = 'Tesis';
                    $scope.redirectToState = 'companies';
                } else {
                    $scope.entityTypeName = '';
                }

                $scope.activateEntity = function () {
                    entityService.activateEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(() => {
                        $state.go($state.current, {}, {reload: true});
                    });
                };
                $scope.removeEntity = function () {
                    const bootboxOpts = {};
                    bootboxOpts.title = 'Devam etmek için onayınız gerekmektedir';
                    bootboxOpts.message = 'Veriyi kalıcı olarak silmek istediğinize emin misiniz? Bu işlem geri alınamaz!';
                    bootboxOpts.size = 'large'
                    bootboxOpts.closeButton = false;

                    bootboxOpts.buttons = {
                        cancel: { label: 'Vazgeç', className: 'btn-success btn-square' },
                        confirm: { label: 'Kalıcı Olarak Sil', className: 'btn-danger btn-square' }
                    };
                    bootboxOpts.buttons.confirm.callback = function () {
                        entityService.removeEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(() => {
                            $state.go($scope.redirectToState, {});
                        });
                    };
                    bootboxOpts.buttons.cancel.callback = function () {};
                    bootbox.dialog(bootboxOpts);
                };

            }
        ]
    }
});