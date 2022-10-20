myApp.directive('htmlFormElement', function(){

    return {
        restrict : "A",
        scope: {
            beingEdited: '=',
            htmlFormElement: '@',
            ngModel: '=',
            ngRequired: '=',
            ngChange: '&',
            label: '@',
            name: '@',
            placeholder: '@'
        },
        templateUrl: '../../../view/drct/core/html-form-element.html',
        controller: [
            '$scope',
            '$timeout',
            ($scope,$timeout) => {
                if($scope.ngChange) {
                    $scope.ngChange();
                }
            }
        ]
    }
});