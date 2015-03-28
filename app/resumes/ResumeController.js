(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResumeController', ResumeController);

    ResumeController.$inject = ['$scope','resumeService', '$modal', 'initialResumes', 'personalInfoService'];

    /* @ngInject */
    function ResumeController($scope, resumeService, $modal, initialResumes, personalInfoService) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'ResumeController';
        vm.resumes = [];
        vm.add = function(){
            openModal('lg');
        };


        activate();

        ////////////////

        function activate() {
            vm.resumes = initialResumes;
        }

        function getResumesShort() {
            resumeService.getResumesShort()
                .then(function(data){
                    vm.resumes = data;
                })
        }

        function openModal (size) {

            var modalInstance = $modal.open({
                templateUrl: 'app/resumes/resumeModal.html',
                controller: 'ResumeModalController',
                controllerAs: 'vm',
                size: size,
                resolve: {
                    personalInfosInit: function(personalInfoService){
                        return personalInfoService.getPersonalInfosShort();
                    }
                }
            });

            modalInstance.result.then(function (resume) {
                console.log(resume);
                //alert(education.name);
                //syncAssociatedResumes();
                resumeService.addResume(resume)
                    .then(function(resumeResult) {
                        console.log(resumeResult)
                        vm.resumes.push(resumeResult.data);
                        //$scope.$apply(function() {

                        //});
                    }, function(response) {
                        console.log(response);
                    });
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };
    }
})();