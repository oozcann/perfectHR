myApp.directive('newEditDeleteButtons', function(){

    return {
        restrict : "EA",
        scope: {
            beingEdited: '=',
            isNew: '=',
            employee: '='
        },
        templateUrl: '../../../view/drct/core/new-edit-delete-buttons-directive.html',
        controller: [
            '$scope',
            '$state',
            '$stateParams',
            '$http',
            '$rootScope',
            'entityService',
            ($scope,$state,$stateParams,$http,$rootScope,entityService) => {

            }
        ]
    }
});