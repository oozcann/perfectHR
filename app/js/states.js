var myApp = angular.module("myApp", ['ui.router','myApp.services','myApp.filters','ui.select']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../view/home.html',
        controller: [
             '$rootScope',
             function ($rootScope) {
                 $rootScope.$emit('homePageBreadcrumb');
             }
        ]
    })
    .state('new-employee', {
        url: '/employee/new',
        template: '<div employee-directive being-edited="beingEdited" is-new="isNew" employee="employee"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            function ($scope, $state, $rootScope) {
                $rootScope.$emit('newEmployeeBreadcrumb');
                $scope.beingEdited = true;
                $scope.isNew = true;
                $scope.employee = {};
            }
        ]
    })
    .state('employee', {
        url: '/employee/{employeeId}',
        template: '<div employee-directive being-edited="beingEdited" is-new="isNew" employee="employee"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            'employee',
            function ($scope, $state, $rootScope, employee) {
                $rootScope.$emit('employeeDetailBreadcrumb',{name: employee.name, surname:employee.surname});
                $scope.beingEdited = false;
                $scope.isNew = false;
                $scope.employee = employee;
            }
        ],
        resolve: {
            employee: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.findById("employee/:employeeId", {"employeeId": $stateParams.employeeId})}]
        }
    })
    .state('employees', {
        url: '/employees',
        template: '<div employees-list employees="employees"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            'entityService',
            'employees',
            function ($scope,$state,$rootScope,entityService,employees) {
                $rootScope.$emit('employeesBreadcrumb');
                $scope.employees = employees;
            }
        ],
        resolve: {
            employees: ['entityService', (entityService) => {return entityService.getList("employee", {"archived": false})}]
        }
    })
    .state('new-company', {
        url: '/company/new',
        template: '<div company-directive being-edited="beingEdited" is-new="isNew" company="company"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            function ($scope, $state, $rootScope) {
                $rootScope.$emit('newCompanyBreadcrumb');
                $scope.beingEdited = true;
                $scope.isNew = true;
                $scope.company = {};
            }
        ]
    })
    .state('company', {
        url: '/company/:companyId',
        template: '<div company-directive being-edited="beingEdited" is-new="isNew" company="company"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            'company',
            function ($scope,$state,$rootScope,company) {
                $rootScope.$emit('companyDetailBreadcrumb',{name:company.name});
                $scope.beingEdited = false;
                $scope.isNew = false;
                $scope.company = company;
            }
        ],
        resolve: {
            company: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.findById("company/:companyId", {"companyId": $stateParams.companyId})}]
        }
    })
    .state('companies', {
        url: '/companies',
        template: '<div companies-list companies="companies"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            'entityService',
            'companies',
            function ($scope,$state,$rootScope,entityService,companies) {
                $rootScope.$emit('companiesBreadcrumb');
                $scope.companies = companies;
            }
        ],
        resolve: {
            companies: ['entityService', (entityService) => {return entityService.getList("company", {"archived": false})}]
        }
    });

    $urlRouterProvider.otherwise("/");



}]);









