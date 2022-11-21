myApp.directive('callToAction', function(){

    return {
        restrict : "EA",
        scope: {
            redirectToState: '@',
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
                $scope.newEntity = function (redirectToState) {
                    const query = {};
                    if ($stateParams.employeeId) {
                        query.employeeId = $stateParams.employeeId;
                    }
                    if (redirectToState) {
                        $state.go(redirectToState,query);
                    }
                    else {
                        console.error('state for entity not specified.')
                    }

                }
            }
        ]
    }
});