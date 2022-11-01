myApp.directive('companySelect', function(){

    return {
        restrict : "A",
        scope: {
            ngModel: '=',
            ngChange: '=',
            ngRequired: '=',
            beingEdited: '=',
            isNew: '=',
            entity: '='
        },
        templateUrl: '../../../view/drct/select/company-select-directive.html',
        controller: [
            '$scope',
            'entityService',
            'referenceService',
            ($scope,entityService,referenceService) => {

                entityService.getList("company", {"archived": false}).then((data) => {
                    $scope.companies = data;
                });
                if (!$scope.isNew) {
                    $scope.ngModel = $scope.entity.companyRef._id;
                }
                $scope.createCompanyRef = function (companyRefId) {
                    referenceService.createEntityRef('company', companyRefId).then((data) => {
                        $scope.entity.companyRef = data;
                    });
                };
            }
        ]
    }
});