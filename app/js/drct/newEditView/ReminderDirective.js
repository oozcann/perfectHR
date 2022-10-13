myApp.directive('reminderDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '=',
            reminder: '=',
            companies: '='
        },
        templateUrl: '../../../view/drct/newEditView/reminder-directive.html',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$http',
            '$rootScope',
            'entityService',
            ($scope,$state,$stateParams,$http,$rootScope,entityService) => {
                $scope.getEntityAddress = 'reminder';
                $scope.saveReminder = function (data) {
                    if ($scope.isNew) {
                        entityService.saveEntity($scope.getEntityAddress ,JSON.stringify(data)).then((data) => {
                            $scope.reminderId = data._id;
                            $scope.redirectAfterSave();
                        });
                    } else {
                        entityService.updateEntity($scope.getEntityAddress, JSON.stringify(data)).then(() => {
                            $scope.beingEdited = false;
                        });

                    }
                };
                $scope.deleteReminder = function () {
                    const bootboxOpts = {};
                    bootboxOpts.title = 'Devam etmek için onayınız gerekmektedir';
                    bootboxOpts.message = 'Hatırlatıcıyı arşivlemek istediğinize emin misiniz?';
                    bootboxOpts.size = 'large'
                    bootboxOpts.closeButton = false;

                    bootboxOpts.buttons = {
                        cancel: { label: 'Vazgeç', className: 'btn-success btn-square' },
                        confirm: { label: 'Sil', className: 'btn-danger btn-square' }
                    };
                    bootboxOpts.buttons.confirm.callback = function () {
                        entityService.deleteEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(function (response) {
                            $state.go('reminders', {});
                        });
                    };
                    bootboxOpts.buttons.cancel.callback = function () {};
                    bootbox.dialog(bootboxOpts);
                };
                $scope.editReminder = function () {
                    $scope.beingEdited = true;
                };
                $scope.cancel = function () {
                    if ($scope.isNew) {
                        $state.go('reminders');
                    } else {
                        $scope.beingEdited = false;
                        $state.go($state.current, {}, {reload: true});
                    }
                };
                $scope.redirectAfterSave = function () {
                    $state.go('reminder', {
                        reminderId: $scope.reminderId,
                        justSaved: true
                    })
                };
            }
        ]
    }
});