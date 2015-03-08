(function () {
    'use strict';

    var app = angular
        .module('app', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("home", { url: "/home", templateUrl: "app/home/home.html" })
            .state("resumes", { url: "/resumes", templateUrl: "app/resumes/resumes.html" })
            .state("admin", { url: "/admin", templateUrl: "app/admin/admin.html" });
        $urlRouterProvider.otherwise("/home");

    });

    /*app.run(function () {
        //do something before the app runs
    });*/
})();