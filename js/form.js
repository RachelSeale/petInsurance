(function(angular) {
  'use strict';

  angular.module('formExample', [])
    .controller('ExampleController', ['$scope', function($scope) {

      $scope.update = function(user) {
        console.log($scope.user);
      };
    }]);

})(window.angular);
