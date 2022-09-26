myApp.directive('companyDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
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
                $scope.redirectAfterSave = function () {
                    $state.go('home');
                };
            }
        ]
    }
});