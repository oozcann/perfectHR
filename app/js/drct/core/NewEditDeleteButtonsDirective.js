myApp.directive('newEditDeleteButtons', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            entity: '=',
            disableOpts: '='
        },
        templateUrl: '../../../view/drct/core/new-edit-delete-buttons-directive.html',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$http',
            '$rootScope',
            'entityService',
            ($scope,$state,$stateParams,$http,$rootScope,entityService) => {
                $scope.getEntityAddress = $scope.entity._class;
                if ($scope.getEntityAddress == 'company') {
                    $scope.redirectInCancelClicked = 'companies';
                } else {
                    $scope.redirectInCancelClicked = $scope.getEntityAddress + 's';
                }
                const queryToRedirectAfterSave = {
                    justSaved: true
                };
                $scope.save = function (data) {
                    if ($scope.isNew) {
                        entityService.saveEntity($scope.getEntityAddress ,JSON.stringify(data)).then((data) => {
                            queryToRedirectAfterSave[$scope.getEntityAddress + 'Id'] = data._id;
                            $scope.redirectAfterSave();
                        });
                    } else {
                        entityService.updateEntity($scope.getEntityAddress, JSON.stringify(data)).then(() => {
                            $scope.beingEdited = false;
                        });

                    }
                };
                $scope.deleteEntity = function () {
                    const bootboxOpts = {};
                    bootboxOpts.title = 'Devam etmek için onayınız gerekmektedir';
                    bootboxOpts.message = 'Veriyi silmek istediğinize emin misiniz?';
                    bootboxOpts.size = 'large'
                    bootboxOpts.closeButton = false;

                    bootboxOpts.buttons = {
                        cancel: { label: 'Vazgeç', className: 'btn-success btn-square' },
                        confirm: { label: 'Sil', className: 'btn-danger btn-square' }
                    };
                    bootboxOpts.buttons.confirm.callback = function () {
                        entityService.deleteEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(function (response) {
                            $state.go($scope.redirectInCancelClicked);
                        });
                    };
                    bootboxOpts.buttons.cancel.callback = function () {};
                    bootbox.dialog(bootboxOpts);
                };
                $scope.edit = function () {
                    $scope.beingEdited = true;
                };
                $scope.cancel = function () {
                    if ($scope.isNew) {
                        if ($scope.redirectInCancelClicked) {
                            $state.go($scope.redirectInCancelClicked);
                        } else {
                            console.error('redirectInCancelClicked not found.');
                        }

                    } else {
                        $scope.beingEdited = false;
                        $state.go($state.current, {}, {reload: true});
                    }
                };
                $scope.redirectAfterSave = function () {
                    $state.go($scope.getEntityAddress, queryToRedirectAfterSave)
                };
            }
        ]
    }
});