/*import htmlTemplate from '../../view/drct/sidebar-menu.html';
export const SideBarMenuDirective = [
	() => ({
		restrict: 'A',
		scope: {
			
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
];*/
myApp.directive('sideBarMenu', function(){

    return {

        restrict : "A",
        //template : '<div class="p-3 d-inline-block"><button ng-click="goToNewEmployeePage()" class="btn btn-success btn-square" style="width:112px;">Yeni Çalışan</button></div>'
        template : '<button ng-click="goToNewEmployeePage()" class="btn btn-success btn-square" style="width:112px;">Yeni Çalışan</button>'

    }


});

/*
<div class="p-3">

    <button ng-click="goToNewEmployeePage()" class="btn btn-success btn-square" style="width:112px;">Yeni Çalışan</button>

</div>

*/