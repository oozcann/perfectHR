myApp.directive('callToAction', function(){

    return {
        restrict : "EA",
        scope: {
            entity: '@'
        },
        templateUrl: '../../../view/drct/core/call-to-action.html',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$http',
            '$rootScope',
            'entityService',
            ($scope,$state,$stateParams,$http,$rootScope,entityService) => {
                $scope.newEntity = function (entity) {
                    if (entity == 'Çalışan') {
                        $scope.stateToRedirect = 'new-employee';
                    }
                    if (entity == 'Firma') {
                        $scope.stateToRedirect = 'new-company';
                    }
                    $state.go($scope.stateToRedirect);
                }
            }
        ]
    }
});