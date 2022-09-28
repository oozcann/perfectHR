myApp.directive('newEntityButton', function(){
    return {
        restrict : "EA",
        scope: {
            entity: '@'
        },
        templateUrl: '../../../view/drct/core/new-entity-button-directive.html',
        controller: [
            '$scope',
            '$state',
            ($scope,$state) => {
                $scope.goToNewCompanyPage = function () {
                    $state.go('new-company',{});
                };
                $scope.goToNewEmployeePage = function () {
                    $state.go('new-employee',{});
                };
            }
        ]
    }
});