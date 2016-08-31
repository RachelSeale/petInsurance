(function(angular) {
  'use strict';
angular.module('formExample', [])
  .controller('ExampleController', ['$scope', function($scope) {

    $scope.dob = {
      value: new Date()
    };
    $scope.master = {};

    $scope.update = function(user) {
      console.log($scope.user);
    };
  }]);

})(window.angular);
