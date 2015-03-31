(function () {
    'use strict';

    angular
        .module('app')
        .directive('jrOptionBind', jrOptionBind);

    jrOptionBind.$inject = ['$window'];

    /* @ngInject */
    function jrOptionBind($window) {
        // Usage:
        // 
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {

            var options = element[0].children();
            options.bind('mouseover', function(){
               console.log('mouseover');
            });
            options.bind('mouseleave', function(){
                console.log('mouseleave');
            });
        }
    }
})();