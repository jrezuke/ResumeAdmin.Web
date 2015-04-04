(function () {
    'use strict';

    var app = angular
        .module('app', []);

    app.controller('TestCtrl', function(){
        var vm = this;
        vm.items2 = [{id:1, name: 'one', age: 10, othersId:3 },
            {id:2, name: 'two', age: 20, othersId:2 },
            {id:3, name: 'three', age: 30, othersId:1 }];
        vm.items = ['one','two','three','four']
    });

    app.directive('testOn', function(){
        return({
            link:function(scope, el){
                    el.on ('mouseenter', function(){
                        console.log('dir mouseover');
                    });
                }
        })
    });
    /*app.run(function () {
     //do something before the app runs
     });*/
})();