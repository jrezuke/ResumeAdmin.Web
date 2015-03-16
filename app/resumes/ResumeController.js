(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResumeController', ResumeController);

    ResumeController.$inject = ['resumeService'];

    /* @ngInject */
    function ResumeController(resumeService) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'ResumeController';

        activate();

        ////////////////

        function activate() {
            resumeService.getResumes()
            .then(function(data){
                vm.resumes = data;
            })
        }
    }
})();