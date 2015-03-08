(function (module) {

    var navbar = function () {
        return {
            templateUrl: "app/layout/navbar.html"
        };
    };

    module.directive("navbar", navbar);

}(angular.module("app")));