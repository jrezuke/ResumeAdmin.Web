(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResumeModalController', ResumeModalController);

    ResumeModalController.$inject = ['$modalInstance', 'personalInfosInit'];

    /* @ngInject */
    function ResumeModalController($modalInstance, personalInfosInit) {
        /* jshint validthis: true */
        var vm = this;
        vm.title = 'Add New Resume';
        vm.resume = {};
        vm.personalInfos = personalInfosInit;
        vm.selectedPersonalInfo = {};

        vm.save = function(){
            vm.resume.personalInfoId = vm.selectedPersonalInfo.id;
            $modalInstance.close(vm.resume);
        }

        vm.cancel = function(){
            $modalInstance.dismiss('cancel');
        }
    }
})();