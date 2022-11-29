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
        $rootScope.$on('reminderListBreadcrumb',()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Hatırlatıcılar", link:"", icon:"fas fa-reminder"}
            ];
            $scope.pageHeader = {
                title: 'Hatırlatıcılar',
                description: 'Listeleme & Takip'
            }
        });
        $rootScope.$on('newReminderBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Hatırlatıcılar", link:"#!/list/reminder"},
                {name: "Yeni Hatırlatıcı", link:""}
            ];
            $scope.pageHeader = {
                title: 'Yeni Hatırlatıcı',
                description: 'Lütfen detaylarını giriniz.'
            }
        });
        $rootScope.$on('reminderDetailBreadcrumb', (event, data)=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Hatırlatıcılar", link:"#!/list/reminder"},
                {name: data.name}
            ];
            $scope.pageHeader = {
                title: '',
                description: ''
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
        $rootScope.$on('employeeDetailBreadcrumb', (event, data)=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Çalışanlar", link:"#!/employees"},
                {name: data.name + ' ' + data.surname, link:""}
            ];
            $scope.pageHeader = {
                title: '',
                description: ''
            }
        });
        $rootScope.$on('newCompanyBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Firmalar", link:"#!/companies"},
                {name: "Yeni Firma", link:""}
            ];
            $scope.pageHeader = {
                title: 'Yeni Firma',
                description: 'Lütfen firma detaylarını giriniz.'
            }
        });
        $rootScope.$on('companiesBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Firmalar", link:""}
            ];
            $scope.pageHeader = {
                title: 'Firmalar',
                description: 'Kayıtlı firmalar listesi üzerinden seçim işlemlerini yapabilirsiniz.'
            }
        });
        $rootScope.$on('companyDetailBreadcrumb', (event, data)=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Firmalar", link:"#!/companies"},
                {name: data.name, link:""}
            ];
            $scope.pageHeader = {
                title: '',
                description: ''
            }
        });
        $rootScope.$on('newBonusBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Primler", link:"#!/bonus/all"},
                {name: "Yeni Prim", link:""}
            ];
            $scope.pageHeader = {
                title: 'Yeni Prim',
                description: 'Lütfen prim detaylarını giriniz.'
            }
        });
        $rootScope.$on('bonusDetailBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Primler", link:"#!/bonus/all"},
                {name: "Prim Detayı", link:""}
            ];
            $scope.pageHeader = {
                title: 'Prim Detayları',
                description: ''
            }
        });
        $rootScope.$on('allBonusBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Primler", link:""}
            ];
            $scope.pageHeader = {
                title: 'Primler',
                description: 'Çalışanlara verilen prim detayları'
            }
        });
        $rootScope.$on('newAnnualLeaveBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Yıllık İzinler", link:"#!/annualLeaves/list"},
                {name: "Yeni Yıllık İzin", link:""}
            ];
            $scope.pageHeader = {
                title: 'Yeni Yıllık İzin',
                description: 'Lütfen izin detaylarını giriniz.'
            }
        });
        $rootScope.$on('annualLeaveDetailBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Yıllık İzinler", link:"#!/annualLeaves/list"},
                {name: "Yıllık İzin Detayı", link:""}
            ];
            $scope.pageHeader = {
                title: 'İzin Detayları',
                description: ''
            }
        });
        $rootScope.$on('annualLeavesBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: "Anasayfa", link:"#!/", icon:"fas fa-home"},
                {name: "Yıllık İzinler", link:""}
            ];
            $scope.pageHeader = {
                title: 'Yıllık İzinler',
                description: 'Çalışanlara verilen yıllık izin detayları'
            }
        });
    }
]);


