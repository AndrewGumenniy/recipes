recipeApp.controller('ideasRecipesItemController', 
	['$scope','$http','$routeParams','$localStorage', function ($scope,$http,$routeParams,$localStorage) {

		$http.get("recipes.json").then(function(response) {
    $scope.myData = response.data.recipes; 
 	
    $scope.item = $routeParams.itemId;
	  $scope.recipesNew = $localStorage.recipesNew;
		var ingredientsArray=[];  
   
    if($localStorage.recipesNew===undefined){
      recipesNew=[];
    }else{
      recipesNew=$localStorage.recipesNew;
    }

		$scope.title=$scope.myData[$scope.item].title;
		$scope.photoUrl=$scope.myData[$scope.item].photoUrl;
		$scope.description=$scope.myData[$scope.item].description;
		$scope.instruction=$scope.myData[$scope.item].instruction;
 
		for (var i = 0; i < $scope.myData[$scope.item].ingredients.length; i++) {
			ingredientsArray.push($scope.myData[$scope.item].ingredients[i]);
		}
				
		$scope.ingredients=ingredientsArray;
								
		$scope.saveToRecieps = function () {

			var counterForRecipelist=0;
			
			$scope.recipesNew = $localStorage.recipesNew;
		
			if($localStorage.recipesNew===undefined){
				recipesNew.push($scope.myData[$scope.item]);
				$scope.id=0;
			}
			for (var i = 0; i < recipesNew.length; i++) {

				if(recipesNew[i].title!==$scope.myData[$scope.item].title){
					counterForRecipelist++;
				}

				if(counterForRecipelist===recipesNew.length||$localStorage.recipesNew===[]){
					$scope.id=$scope.recipesNew.length;
					recipesNew.push($scope.myData[$scope.item]);
				}

     	 $localStorage.recipesNew = recipesNew;

    	}
  	}
	});
}]);