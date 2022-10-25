myApp.directive('companyCard', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            company: '='
        },
        templateUrl: '../../../view/drct/main/company-card-directive.html',
        controller: [
            '$scope',
            ($scope) => {


            }
        ]
    }
});