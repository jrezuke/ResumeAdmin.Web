(function(){
    angular.module('app').controller('MainCtrl', function($scope) {
        $scope.openModal = function() {
            $scope.modalOpen = true;
        }

        $scope.modalClosed = function(response) {
            $scope.closeModal('no');
        }

        $scope.closeModal = function(response) {
            $scope.modalOpen = false;
            console.log('modal closed', response);
        }
    });
})();

