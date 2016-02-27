recipeApp.controller('ideasController',
  ['$scope','$http',function($scope, $http) {
    $http.get("https://jsonblob.com/api/jsonBlob/56c089b3e4b01190df4ef1ce").then(function(response) {
      $scope.myData = response.data.recipes;
      $scope.myData[0].active = true;
    });	
}]);