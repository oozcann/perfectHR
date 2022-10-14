myApp.directive('employeeDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '=',
            employee: '=',
            companies: '='
        },
        templateUrl: '../../../view/drct/newEditView/employee-directive.html',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$http',
            '$rootScope',
            'entityService',
            ($scope,$state,$stateParams,$http,$rootScope,entityService) => {
                $scope.getEntityAddress = 'employee';
                $scope.entity = $scope.employee;
                if (!$scope.isNew) {
                    $scope.employeeCompanyRef = $scope.employee.companyRef._id;
                }
                $scope.createCompanyRef = function (companyRefId) {
                    entityService.findById('company/:companyId', {"companyId": companyRefId}).then((data) => {
                        $scope.employee.companyRef = {
                            _id: data._id,
                            name: data.name,
                            class: 'COMPANY'
                        };
                    });
                };
                $scope.removeEmployee = function () {
                    const bootboxOpts = {};
                    bootboxOpts.title = 'Devam etmek için onayınız gerekmektedir';
                    bootboxOpts.message = 'Çalışanı kalıcı olarak silmek istediğinize emin misiniz? Bu işlem geri alınamaz!';
                    bootboxOpts.size = 'large'
                    bootboxOpts.closeButton = false;

                    bootboxOpts.buttons = {
                        cancel: { label: 'Vazgeç', className: 'btn-success btn-square' },
                        confirm: { label: 'Kalıcı Olarak Sil', className: 'btn-danger btn-square' }
                    };
                    bootboxOpts.buttons.confirm.callback = function () {
                        entityService.removeEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(() => {
                            $state.go('employees', {});
                        });
                    };
                    bootboxOpts.buttons.cancel.callback = function () {};
                    bootbox.dialog(bootboxOpts);
                };
                $scope.activateEmployee = function () {
                    entityService.activateEntity($scope.getEntityAddress, JSON.stringify($scope.entity)).then(() => {
                        $state.go($state.current, {}, {reload: true});
                    });
                };
            }
        ]
    }
});