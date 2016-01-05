var app = angular.module("symfonyIdApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'templates/index.html',
    controller: 'SymfonyIdCtrl',
  })
  .when('/:page', {
    templateUrl: function(param){
      return 'templates/' + param.page + '.html';
    },
    controller: 'SymfonyIdContentCtrl'
  });

});

app.controller("SymfonyIdCtrl", function($scope, $http) {
  $scope.sfid = {};
  $http.get('data.json')
    .then(function(sfidData){
      $scope.sfid = sfidData.data;
    });
});

app.controller("SymfonyIdContentCtrl", function($scope) {
  console.log('content');
});