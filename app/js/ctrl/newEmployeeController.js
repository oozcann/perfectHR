myApp.controller('newEmployeeController', ['$scope', '$state', '$stateParams','$http',
    function ($scope, $state, $stateParams, $http) {

    $scope.goBack = function () {

            $state.go('home', {})


    };
    $scope.saveEmployee = function (data) {
        $http.post('/api/employee/save', JSON.stringify(data)).then(function (response) {
        
        });
        $state.go('home', {})
    }
    
}]);


