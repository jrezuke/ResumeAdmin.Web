(function () {
    'use strict';

    var app = angular
        .module('app', ['ui.router', 'ui.bootstrap', 'nsPopover']);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "app/home/home.html"
            })
            .state("resumes", {
                url: "/resumes",
                templateUrl: "app/resumes/resumes.html",
                controller: "ResumeController",
                controllerAs: "vm",
                resolve: {
                    initialResumes: function(resumeService){
                        return resumeService.getResumesShort();
                    }
                }
            })
            .state("admin", {
                url: "/admin",
                templateUrl: "app/admin/admin.html"
            });
        $urlRouterProvider.otherwise("/home");

    });



    /*app.run(function () {
        //do something before the app runs
    });*/
})();