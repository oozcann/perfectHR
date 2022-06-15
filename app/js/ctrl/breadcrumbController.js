myApp.controller('breadcrumbController', ['$scope', '$state', '$stateParams','$http', '$location',
    function ($scope, $state, $stateParams, $http, $location) {
        
        if ($location.path() == '/new-employee') {
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Çalışanlar", link:"#!/employees"},
                {name: "Yeni Çalışan", link:""}
            ];
        } else {
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"}
            ];
        }
        
        //console.log("AAAA : " + $location.path());
}]);


