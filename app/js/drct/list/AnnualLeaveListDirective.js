myApp.directive('annualLeaveList', function(){

    return {
        restrict : "A",
        scope: {
            annualLeaves: '='
        },
        templateUrl: '../../../view/drct/list/annual-leave-list.html',
        controller: [
            '$scope',
            'entityService',
            ($scope,entityService) => {
                $scope.getEntityAddress = 'annualLeave';
            }
        ]
    }
});