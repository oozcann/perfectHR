const serviceModuleConf = function ($provide) {
    $provide.factory('entityService', [
		'$q',
		'$http',
		function ($q,$http) {
			function findById (entityAddress, query) {
			    entityAddress = "/api" + entityAddress;
			    const deferred = $q.defer();
                $http.post(entityAddress, query)
                .then(function (response) {
                    if (response && response.data) {
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
			}
			return {
				findById: findById
			};
		}
	]);
};
serviceModuleConf.$inject = ['$provide'];
angular.module('myApp.services', [], serviceModuleConf);