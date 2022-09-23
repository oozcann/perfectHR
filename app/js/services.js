const serviceModuleConf = function ($provide) {
    $provide.factory('entityService', [
		'$q',
		'$http',
		function ($q,$http) {
			function findById (entityAddress, query) {
			    entityAddress = "/api/" + entityAddress;
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
			function saveEntity (entityAddress, entity) {
                entityAddress = "/api/" + entityAddress + '/save';
                const deferred = $q.defer();
                if (!entity) {
                	console.error('entity not specified.');
                    deferred.reject();
                }
                $http.post(entityAddress, entity)
                .then(function (response) {
                    if (response && response.data) {
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            }
            function deleteEntity (entityAddress, entity) {
                entityAddress = "/api/" + entityAddress + '/delete';
                const deferred = $q.defer();
                if (!entity) {
                	console.error('entity not specified.');
                    deferred.reject();
                }
                $http.post(entityAddress, entity)
                .then(function (response) {
                    if (response && response.data) {
                        deferred.resolve(response.data);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            }
            function activateEntity (entityAddress, entity) {
                entityAddress = "/api/" + entityAddress + '/activate';
                const deferred = $q.defer();
                if (!entity) {
                	console.error('entity not specified.');
                    deferred.reject();
                }
                $http.post(entityAddress, entity)
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
				findById: findById,
				saveEntity: saveEntity,
				deleteEntity: deleteEntity,
				activateEntity: activateEntity
			};
		}
	]);
};
serviceModuleConf.$inject = ['$provide'];
angular.module('myApp.services', [], serviceModuleConf);