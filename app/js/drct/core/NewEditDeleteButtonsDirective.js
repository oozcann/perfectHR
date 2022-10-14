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
                console.log($scope.disableOpts);
                const queryKey = $scope.entity._class + 'Id';
                $scope.save = function (data) {
                    if ($scope.isNew) {
                        entityService.saveEntity($scope.getEntityAddress ,JSON.stringify(data)).then((data) => {
                            $scope.entityId = data._id;
                            $scope.redirectAfterSave();
                        });
                    } else {
                        entityService.updateEntity($scope.getEntityAddress, JSON.stringify(data)).then(() => {
                            $scope.beingEdited = false;
                        });

                    }
                };
                $scope.edit = function () {
                    $scope.beingEdited = true;
                    console.log($scope.entity);
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
                    $state.go($scope.getEntityAddress, {
                        reminderId: $scope.entityId,
                        justSaved: true
                    })
                };
            }
        ]
    }
});