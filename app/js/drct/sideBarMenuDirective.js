import htmlTemplate from '../../view/drct/sidebar-menu.html';
export const sideBarMenuDirective = [
	() => ({
		restrict: 'A',
		scope: {
			tag: '=',
			beingEdited: '=',
			postCancelFunction: '&',
			postSaveFunction: '&',
			justSaved: '=',
			isNew: '@',
			tags: '='
		},
		template: htmlTemplate,
		controller: [
			'$scope',
            '$state',
			'$timeout',
			($scope, $state, $timeout) => {
				
			}
		],
		link: function ($scope) {
			
		}
	})
];
