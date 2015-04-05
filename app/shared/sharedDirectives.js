(function () {

    angular.module('app').directive('urRightClick',['$parse', function ($parse) {
        return function (scope, element, attrs) {
            var fn = $parse(attrs.urRightClick);
            element.bind('contextmenu', function (event) {
                scope.$apply(function () {
                    event.preventDefault();
                    event.stopPropagation();
                    fn(scope, {$event: event});
                });
            });
        };
    }]);

})();