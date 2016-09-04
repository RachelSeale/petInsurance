(function(angular) {
  'use strict';

  angular.module('formExample', ['jkuri.datepicker'])
    .controller('ExampleController', ['$scope', function($scope) {

      $scope.update = function(user) {
        console.log($scope.user);
      };
    }]);

})(window.angular);
