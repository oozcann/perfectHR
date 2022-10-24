myApp.directive('callToAction', function(){

    return {
        restrict : "EA",
        scope: {
            entity: '=',
            label: '@'
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
                    if (entity && entity._class) {
                        $state.go('new-' + entity._class);
                    }
                    else {
                        console.error('_class for entity not found.')
                    }

                }
            }
        ]
    }
});