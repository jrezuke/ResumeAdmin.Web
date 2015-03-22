(function () {
    'use strict';

    angular
        .module('app')
        .factory('resumeService', resumeService);

    resumeService.$inject = ['$http','$q'];

    /* @ngInject */
    function resumeService($http, $q) {
        var service = {
            getResumes: getResumes,
            getResumesShort: getResumesShort,
            addResume: addResume
        };
        var baseUrl = 'http://localhost:89';

        return service;

        ////////////////

        function addResume(newResume){
            return $http.post(baseUrl + '/api/resume', newResume)
        }

        function getResumes() {
            return $http({
                method: 'GET',
                url: baseUrl + '/api/resume'
            })
                .then(function(response){
                    return response.data;
                })
                .catch(function(response){
                    return $q.reject('Error retrieving resumes. (HTTP status: ' + response.status + ')');
                })

        }

        function getResumesShort() {
            return $http({
                method: 'GET',
                url: baseUrl + '/api/resume/resumesshort'
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