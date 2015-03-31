(function () {
    'use strict';

    angular
        .module('app')
        .directive('jrPersonalInfoTip', jrPersonalInfoTip);

    jrPersonalInfoTip.$inject = ['$window'];

    /* @ngInject */
    function jrPersonalInfoTip($window) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            controller: personInfoTipController
        };
        return directive;

        function link(scope, element, attrs) {

        }

        function personInfoTipController() {

        }
    }
})();