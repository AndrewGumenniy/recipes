recipeApp.controller('ideasController',
  ['$scope','$http',function($scope, $http) {
    $http.get("recipes.json").then(function(response) {
      $scope.myData = response.data.recipes;
      $scope.myData[0].active = true;
    });	

    $(document).ready(function() {
         $('.carousel').carousel({
             interval: 2000
         })
    }); 
}]);