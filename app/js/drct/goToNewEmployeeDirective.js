myApp.directive('goToNewEmployee', function(){

    return {

        restrict : "EA",
        scope: {
            
        },
        templateUrl: '../../../view/drct/go-to-new-employee.html',
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