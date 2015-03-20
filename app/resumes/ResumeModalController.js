(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResumeModalController', ResumeModalController);

    ResumeModalController.$inject = ['$modal'];

    /* @ngInject */
    function ResumeModalController($modal) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.title = 'ResumeModalController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();