(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResumeModalItemController', ResumeModalItemController);

    //ResumeModalController.$inject = ['personalInfosInit'];

    /* @ngInject */
    function ResumeModalItemController($scope) {
        /* jshint validthis: true */
        var vm = this;

        vm.showInfo = function(){
            console.log("showInfo");
        }

        vm.hideInfo = function(){
            console.log("hideInfo");
        }


    }
})();