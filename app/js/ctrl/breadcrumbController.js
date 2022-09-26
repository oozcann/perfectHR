myApp.controller('breadcrumbController', ['$scope', '$state', '$stateParams','$http', '$location', '$rootScope',
    function ($scope, $state, $stateParams, $http, $location,$rootScope) {
        
        $rootScope.$on('homePageBreadcrumb',()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"}
            ];
            $scope.pageHeader = {
                title: 'Anasayfa',
                description: 'Raporlar & Genel Bilgiler'
            }
        });
        $rootScope.$on('newEmployeeBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Çalışanlar", link:"#!/employees"},
                {name: "Yeni Çalışan", link:""}
            ];
            $scope.pageHeader = {
                title: 'Yeni Çalışan',
                description: 'Lütfen çalışan detaylarını giriniz.'
            }
        });
        $rootScope.$on('employeesBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Çalışanlar", link:""}
            ];
            $scope.pageHeader = {
                title: 'Çalışanlar',
                description: 'Kayıtlı çalışanlar listesi üzerinden seçim işlemlerini yapabilirsiniz.'
            }
        });
        $rootScope.$on('employeeDetailBreadcrumb', (name, listener)=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Çalışanlar", link:"#!/employees"},
                {name: listener.name + ' ' + listener.surname, link:""}
            ];
            $scope.pageHeader = {
                title: '',
                description: ''
            }
        });
    }
]);


