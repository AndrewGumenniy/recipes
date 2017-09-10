recipeApp.controller('myRecipesController', 
	['$scope', '$localStorage', function($scope, $localStorage) {
		$scope.recipesNew = $localStorage.recipesNew;
		
		$scope.deleteAll = function () {
		console.log("111");
			localStorage.clear();
			location.reload();
		}
}]);