var myApp = angular.module("myApp", ['ui.router','myApp.services','myApp.filters']);

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
    .state('employeesBackup', {
        url: '/employees',
        templateUrl: "../view/employees.html",
        controller : "employeesListController"

    })
    .state('birthday', {
        url: '/birthday',
        templateUrl: "html/birthday.html",
        controller : "birthdayController"

    })
    .state('test', {
        url: '/test',
        templateUrl: "html/test.html",
        controller : "testController"

    }); 

    $urlRouterProvider.otherwise("/");



}]);









