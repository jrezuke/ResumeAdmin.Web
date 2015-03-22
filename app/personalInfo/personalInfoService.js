(function () {
    'use strict';

    angular
        .module('app')
        .factory('personalInfoService', personalInfoService);

    personalInfoService.$inject = ['$http','$q'];

    /* @ngInject */
    function personalInfoService($http, $q) {
        var service = {
            getPersonalInfosShort: getPersonalInfosShort

        };
        var baseUrl = 'http://localhost:89';

        return service;

        ////////////////



        function getPersonalInfosShort() {
            return $http({
                method: 'GET',
                url: baseUrl + '/api/personalinfo/personalinfosshort'
            })
                .then(function(response){
                    return response.data;
                })
                .catch(function(response){
                    return $q.reject('Error retrieving resumes. (HTTP status: ' + response.status + ')');
                })

        }
    }
})();
