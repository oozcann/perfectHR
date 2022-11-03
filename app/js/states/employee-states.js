var myApp = angular.module("myApp", ['ui.router','myApp.services','myApp.filters','ui.select']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '../view/home.html',
        controller: [
             '$rootScope',
             function ($rootScope) {
                 $rootScope.$emit('homePageBreadcrumb');
             }
        ]
    })
    /*
    .state('new-employee', {
        url: '/employee/new',
        template: '<div employee-directive being-edited="beingEdited" is-new="isNew" employee="employee" companies="companies"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            'companies',
            function ($scope, $state, $rootScope,companies) {
                $rootScope.$emit('newEmployeeBreadcrumb');
                $scope.beingEdited = true;
                $scope.isNew = true;
                $scope.companies = companies;
                $scope.employee = {
                    _class: 'employee'
                };
            }
        ],
        resolve: {
            companies: ['entityService', (entityService) => {return entityService.getList("company", {"archived": false})}]
        }
    })
    */
    .state('employee', {
        // parent: 'root',
        abstract: true,
        url: '/employee/:employeeId',
        params: {
            employeeId: null
        },
        template: 'TEST<div ui-view></div>'
    })
    .state('employee.bonus', {
        url: '/bonus/new',
        template: '<div bonus-directive></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            function ($scope, $state, $rootScope) {
                $rootScope.$emit('newBonusBreadcrumb');

            }
        ]
    });
    $urlRouterProvider.otherwise("/");



}]);









