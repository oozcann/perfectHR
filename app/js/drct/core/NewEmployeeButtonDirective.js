myApp.directive('newEmployeeButton', function(){
    return {
        restrict : "EA",
        scope: {

        },
        templateUrl: '../../../view/drct//core/new-employee-button-directive.html',
        controller: [
            '$scope',
            '$state',
            ($scope,$state) => {
                $scope.goToNewEmployeePage = function () {
                    $state.go('new-employee',{});
                };
            }
        ]
    }
});