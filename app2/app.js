(function () {
    'use strict';

    var app = angular
        .module('app', []);

    app.controller('TestCtrl', function(){
        var vm = this;
        vm.items2 = [{name: 'one', age: 10, othersId:3 },
            { name: 'two', age: 20, othersId:2 },
            { name: 'three', age: 30, othersId:1 }];
        vm.items = ['one','two','three','four']
    })


    /*app.run(function () {
     //do something before the app runs
     });*/
})();