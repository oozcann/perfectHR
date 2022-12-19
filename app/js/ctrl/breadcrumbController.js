myApp.controller('breadcrumbController', ['$scope', '$state', '$stateParams','$http', '$location', '$rootScope','$translate',
    function ($scope, $state, $stateParams, $http, $location,$rootScope,$translate) {
        
        $rootScope.$on('homePageBreadcrumb',()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.HOME.TITLE'),
                description: $translate.instant('PAGE_HEADER.HOME.DESCRIPTION')
            }
        });
        $rootScope.$on('reminderListBreadcrumb',()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.REMINDER.REMINDERS'), link:"", icon:"fas fa-reminder"}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.REMINDER.LIST.TITLE'),
                description: $translate.instant('PAGE_HEADER.REMINDER.LIST.DESCRIPTION')
            }
        });
        $rootScope.$on('newReminderBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.REMINDER.REMINDERS'), link:"#!/list/reminder"},
                {name: $translate.instant('BREADCRUMB.REMINDER.NEW'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.REMINDER.NEW.TITLE'),
                description: $translate.instant('PAGE_HEADER.REMINDER.NEW.DESCRIPTION')
            }
        });
        $rootScope.$on('reminderDetailBreadcrumb', (event, data)=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.REMINDER.REMINDERS'), link:"#!/list/reminder"},
                {name: data.name}
            ];
            $scope.pageHeader = {
                title: '',
                description: ''
            }
        });
        $rootScope.$on('newEmployeeBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.EMPLOYEE.EMPLOYEES'), link:"#!/employees"},
                {name: $translate.instant('BREADCRUMB.EMPLOYEE.NEW'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.EMPLOYEE.NEW.TITLE'),
                description: $translate.instant('PAGE_HEADER.EMPLOYEE.NEW.DESCRIPTION')
            }
        });
        $rootScope.$on('employeesBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.EMPLOYEE.EMPLOYEES'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.EMPLOYEE.LIST.TITLE'),
                description: $translate.instant('PAGE_HEADER.EMPLOYEE.LIST.DESCRIPTION')
            }
        });
        $rootScope.$on('employeeDetailBreadcrumb', (event, data)=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.EMPLOYEE.EMPLOYEES'), link:"#!/employees"},
                {name: data.name + ' ' + data.surname, link:""}
            ];
            $scope.pageHeader = {
                title: '',
                description: ''
            }
        });
        $rootScope.$on('newCompanyBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.COMPANY.COMPANIES'), link:"#!/companies"},
                {name: $translate.instant('BREADCRUMB.COMPANY.NEW'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.COMPANY.NEW.TITLE'),
                description: $translate.instant('PAGE_HEADER.COMPANY.NEW.DESCRIPTION')
            }
        });
        $rootScope.$on('companiesBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.COMPANY.COMPANIES'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.EMPLOYEE.LIST.TITLE'),
                description: $translate.instant('PAGE_HEADER.EMPLOYEE.LIST.DESCRIPTION')
            }
        });
        $rootScope.$on('companyDetailBreadcrumb', (event, data)=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.COMPANY.COMPANIES'), link:"#!/companies"},
                {name: data.name, link:""}
            ];
            $scope.pageHeader = {
                title: '',
                description: ''
            }
        });
        $rootScope.$on('newBonusBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.BONUS.BONUS'), link:"#!/bonus/all"},
                {name: $translate.instant('BREADCRUMB.BONUS.NEW'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.BONUS.NEW.TITLE'),
                description: $translate.instant('PAGE_HEADER.BONUS.NEW.DESCRIPTION')
            }
        });
        $rootScope.$on('bonusDetailBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.BONUS.BONUS'), link:"#!/bonus/all"},
                {name: $translate.instant('BREADCRUMB.BONUS.DETAIL'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.BONUS.DETAIL'),
                description: ''
            }
        });
        $rootScope.$on('allBonusBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.BONUS.BONUS'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.BONUS.LIST.TITLE'),
                description: $translate.instant('PAGE_HEADER.BONUS.LIST.DESCRIPTION')
            }
        });
        $rootScope.$on('newAnnualLeaveBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.ANNUAL_LEAVE.ANNUAL_LEAVES'), link:"#!/annualLeaves/list"},
                {name: $translate.instant('BREADCRUMB.ANNUAL_LEAVE.NEW'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.ANNUAL_LEAVE.NEW.TITLE'),
                description: $translate.instant('PAGE_HEADER.ANNUAL_LEAVE.NEW.DESCRIPTION')
            }
        });
        $rootScope.$on('annualLeaveDetailBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.ANNUAL_LEAVE.ANNUAL_LEAVES'), link:"#!/annualLeaves/list"},
                {name: $translate.instant('BREADCRUMB.ANNUAL_LEAVE.DETAIL'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.ANNUAL_LEAVE.DETAIL'),
                description: ''
            }
        });
        $rootScope.$on('annualLeavesBreadcrumb', ()=>{
            $scope.breadcrumbItems = [
                {name: $translate.instant('BREADCRUMB.HOME'), link:"#!/", icon:"fas fa-home"},
                {name: $translate.instant('BREADCRUMB.ANNUAL_LEAVE.ANNUAL_LEAVES'), link:""}
            ];
            $scope.pageHeader = {
                title: $translate.instant('PAGE_HEADER.ANNUAL_LEAVE.LIST.TITLE'),
                description: $translate.instant('PAGE_HEADER.ANNUAL_LEAVE.LIST.DESCRIPTION')
            }
        });
    }
]);


