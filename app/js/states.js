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
    $stateProvider.state('reminders', {
        url: '/list/reminder',
        template: '<div reminder-list reminders="reminders"></div>',
        controller: [
             '$rootScope',
             '$scope',
             'reminders',
             function ($rootScope,$scope,reminders) {
                 $rootScope.$emit('reminderListBreadcrumb');
                 $scope.reminders = reminders;
             }
        ],
        resolve: {
            reminders: ['entityService', (entityService) => {return entityService.getList("reminder", {"archived": false})}]
        }
    })
    .state('new-reminder', {
        url: '/reminder/new',
        template: '<div reminder-directive being-edited="beingEdited" is-new="isNew" reminder="reminder" companies="companies"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            'companies',
            function ($scope,$state,$rootScope,companies) {
                $rootScope.$emit('newReminderBreadcrumb');
                $scope.beingEdited = true;
                $scope.isNew = true;
                $scope.companies = companies;
                $scope.reminder = {
                    _class: 'reminder'
                };
            }
        ],
        resolve: {
            companies: ['entityService', (entityService) => {return entityService.getList("company", {"archived": false})}]
        }
    })
    .state('reminder', {
        url: '/reminder/{reminderId}?justSaved',
        template: '<div reminder-directive being-edited="beingEdited" is-new="isNew" reminder="reminder" companies="companies" just-saved="justSaved"></div>',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$rootScope',
            'reminder',
            'companies',
            function ($scope,$state,$stateParams,$rootScope,reminder,companies) {
                $rootScope.$emit('reminderDetailBreadcrumb',{name: reminder.name});
                $scope.beingEdited = false;
                $scope.isNew = false;
                $scope.justSaved = $stateParams.justSaved;
                $scope.reminder = reminder;
                $scope.companies = companies;
            }
        ],
        resolve: {
            reminder: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.findById("reminder/:reminderId", {"reminderId": $stateParams.reminderId,"_class":"reminder"})}],
            companies: ['entityService', (entityService) => {return entityService.getList("company", {"archived": false})}]
        }
    })
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
    .state('employee.main', {
        url: '?justSaved',
        template: '<div employee-directive being-edited="beingEdited" is-new="isNew" employee="employee" companies="companies" just-saved="justSaved" all-bonus="allBonus"></div>',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$rootScope',
            'employee',
            'companies',
            'allBonus',
            function ($scope,$state,$stateParams,$rootScope,employee,companies,allBonus) {
                $rootScope.$emit('employeeDetailBreadcrumb',{name: employee.name, surname:employee.surname});
                $scope.beingEdited = false;
                $scope.isNew = false;
                $scope.justSaved = $stateParams.justSaved;
                $scope.employee = employee;
                $scope.companies = companies;
                $scope.allBonus = allBonus;
            }
        ],
        resolve: {
            employee: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.findById("employee/:employeeId", {"employeeId": $stateParams.employeeId,"_class":"employee"})}],
            companies: ['entityService', (entityService) => {return entityService.getList("company", {"archived": false})}],
            allBonus: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.getList("bonus", {"archived": false,"employeeRef._id":$stateParams.employeeId})}]
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
                $scope.company = {
                    _class: 'company'
                };
            }
        ]
    })
    .state('company', {
        url: '/company/:companyId?justSaved',
        template: '<div company-directive being-edited="beingEdited" is-new="isNew" just-saved="justSaved" company="company" employees="employees" reminders="reminders"></div>',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$rootScope',
            'company',
            'employees',
            'reminders',
            function ($scope,$state,$stateParams,$rootScope,company,employees,reminders) {
                $rootScope.$emit('companyDetailBreadcrumb',{name:company.name});
                $scope.beingEdited = false;
                $scope.isNew = false;
                $scope.justSaved = $stateParams.justSaved;
                $scope.company = company;
                $scope.employees = employees;
                $scope.reminders = reminders;
            }
        ],
        resolve: {
            company: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.findById("company/:companyId", {"companyId": $stateParams.companyId, '_class':'company'})}],
            employees: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.getList("employee", {"archived": false,"companyRef._id":$stateParams.companyId})}],
            reminders: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.getList("reminder", {"archived": false,"companyRef._id":$stateParams.companyId})}]
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
    })
    .state('employee', {
        //parent: 'root',
        abstract: true,
        url: '/employee/:employeeId',
        params: {
            employeeId: null
        },
        template: '<div ui-view></div>',
        controller: [
            '$scope',
            'employee',
            'employeeRef',
            'referenceService',
            '$stateParams',
            function ($scope,employee,employeeRef,referenceService,$stateParams) {
                $scope.employee = employee;
                $scope.employeeRef = employeeRef;
            }
        ],
        resolve: {
            employee: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.findById("employee/:employeeId", {"employeeId": $stateParams.employeeId,"_class":"employee"})}],
            employeeRef: ['referenceService','$stateParams', (referenceService,$stateParams) => {return referenceService.createEntityRef('employee', $stateParams.employeeId)}],
        }
    })
    .state('employee.newBonus', {
        url: '/bonus/new',
        template: '<div bonus-directive bonus="bonus" being-edited="beingEdited" is-new="isNew"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            '$stateParams',
            'referenceService',
            function ($scope, $state, $rootScope,$stateParams,referenceService) {
                $rootScope.$emit('newBonusBreadcrumb');
                $scope.beingEdited = true;
                $scope.isNew = true;
                $scope.bonus = {
                    _class: 'bonus',
                    employeeRef: $scope.employeeRef
                };
            }
        ],
        resolve: {

        }
    })
    .state('employee.bonus', {
        url: '/bonus/:bonusId',
        template: '<div bonus-directive bonus="bonus" being-edited="beingEdited" is-new="isNew"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            '$stateParams',
            'referenceService',
            'bonus',
            function ($scope, $state, $rootScope,$stateParams,referenceService,bonus) {
                $rootScope.$emit('bonusDetailBreadcrumb');
                $scope.beingEdited = false;
                $scope.isNew = false;
                $scope.bonus = bonus;
            }
        ],
        resolve: {
            bonus: ['entityService','$stateParams', (entityService,$stateParams) => {return entityService.findById("bonus/:bonusId", {"bonusId": $stateParams.bonusId,"_class":"bonus"})}],
        }
    })
    .state('all-bonus', {
        url: '/bonus/all',
        template: '<div bonus-list all-bonus="allBonus"></div>',
        controller: [
            '$scope',
            '$state',
            '$rootScope',
            'entityService',
            'allBonus',
            function ($scope,$state,$rootScope,entityService,allBonus) {
                $rootScope.$emit('allBonusBreadcrumb');
                $scope.allBonus = allBonus;
            }
        ],
        resolve: {
            allBonus: ['entityService', (entityService) => {return entityService.getList("bonus", {"archived": false})}]
        }
    });
    $urlRouterProvider.otherwise("/");
}]);