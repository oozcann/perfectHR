myApp.controller('breadcrumbController', ['$scope', '$state', '$stateParams','$http', '$location', '$rootScope',
    function ($scope, $state, $stateParams, $http, $location,$rootScope) {
        
        
        $rootScope.$on('newEmployee', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Çalışanlar", link:"#!/employees"},
                {name: "Yeni Çalışan", link:""}
            ];
        });
        $rootScope.$on('employees', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Aktif Çalışanlar", link:""}
            ];
        });

        /*
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
        */
        //console.log("AAAA : " + $location.path());
}]);


