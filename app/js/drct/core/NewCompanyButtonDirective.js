myApp.directive('newCompanyButton', function(){
    return {
        restrict : "EA",
        scope: {

        },
        templateUrl: '../../../view/drct/core/new-company-button-directive.html',
        controller: [
            '$scope',
            '$state',
            ($scope,$state) => {
                $scope.goToNewCompanyPage = function () {
                    $state.go('new-company',{});
                };
            }
        ]
    }
});