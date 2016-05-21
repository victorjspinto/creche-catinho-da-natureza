angular.module('creche.login')
  .controller('LogoutCtrl', function($scope, $log) {

    $scope.logout = function() {
      $log.log('Logging out');
      firebase.auth().signOut().then(function() {
        $log.log('Signout success')
      }, function(error) {
        $log.error('Signout Error', error);
      });;
    };
  });
