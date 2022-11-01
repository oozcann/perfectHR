myApp.directive('companyDirective', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            justSaved: '=',
            company: '=',
            employees: "=",
            reminders: "="
        },
        templateUrl: '../../../view/drct/newEditView/company-directive.html',
        controller: [
            '$scope',
            ($scope) => {
                $scope.getEntityAddress = 'company';
                $scope.entity = $scope.company;
            }
        ]
    }
});