angular.module('creche.students', [])
  .config(function ($routeProvider) {
    $routeProvider.when('/students', {
      templateUrl: 'module/students/students.html'
    })
  });
