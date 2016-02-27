recipeApp.controller('myRecipesController', 
	['$scope', '$localStorage', function($scope, $localStorage) {
		$scope.recipesNew = $localStorage.recipesNew;	  
}]);