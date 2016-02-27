recipeApp.controller('myRecipesItemController', 
	['$scope', '$routeParams','$localStorage', function ($scope, $routeParams, $localStorage) {
    $scope.item = $routeParams.itemId;
		$scope.recipesNew = $localStorage.recipesNew;
		var ingredientsArray=[];
    $scope.id=$scope.item;

		$scope.title=$scope.recipesNew[$scope.item].title;
		$scope.photoUrl=$scope.recipesNew[$scope.item].photoUrl;
		$scope.description=$scope.recipesNew[$scope.item].description;
		$scope.instruction=$scope.recipesNew[$scope.item].instruction;

		for (var i = 0; i < $scope.recipesNew[$scope.item].ingredients.length; i++) {
			if($scope.recipesNew[$scope.item].ingredients[i].name===undefined){
				ingredientsArray.push($scope.recipesNew[$scope.item].ingredients[i]);
			}else{
				ingredientsArray.push($scope.recipesNew[$scope.item].ingredients[i].name);
			}
		}
		
		if($scope.recipesNew[$scope.item].liked==='1'){
			$scope.addClassForLiked="darkButton";
		}
		if($scope.recipesNew[$scope.item].planned==='1'){
			$scope.addClassForPlanned="darkButton";
		}
		if($scope.recipesNew[$scope.item].purchase==='1'){
			$scope.addClassForPurchase="darkButton";
		}
		$scope.ingredients=ingredientsArray;
		
		$scope.recipesNew[$scope.item].id=$scope.item;
				
		$scope.addToLiked = function () {
			if($scope.recipesNew[$scope.item].liked===undefined||$scope.recipesNew[$scope.item].liked==='0'){
				$scope.recipesNew[$scope.item].liked='1';		
				$localStorage.recipesNew = $scope.recipesNew;
				$scope.addClassForLiked="darkButton";
			}
			else{
				$scope.recipesNew[$scope.item].liked='0';		
				$localStorage.recipesNew = $scope.recipesNew;
				$scope.addClassForLiked="";
			}
		}
				  
		$scope.addToPlanned = function () {
			if($scope.recipesNew[$scope.item].planned===undefined||$scope.recipesNew[$scope.item].planned==='0'){
				$scope.recipesNew[$scope.item].planned='1';		
				$localStorage.recipesNew = $scope.recipesNew;
				$scope.addClassForPlanned="darkButton";
			}
			else{
				$scope.recipesNew[$scope.item].planned='0';		
				$localStorage.recipesNew = $scope.recipesNew;
				$scope.addClassForPlanned="";
			}
		}
	
		$scope.addToBasket = function () {			
			if($scope.recipesNew[$scope.item].purchase===undefined||$scope.recipesNew[$scope.item].purchase==='0'){
				$scope.recipesNew[$scope.item].purchase='1';		
				$localStorage.recipesNew = $scope.recipesNew;
				$scope.addClassForPurchase="darkButton";
			}
			else{
				$scope.recipesNew[$scope.item].purchase='0';		
				$localStorage.recipesNew = $scope.recipesNew;
				$scope.addClassForPurchase="";
			}			
		}

		$scope.deleteItem = function () {
			if($scope.recipesNew.length>1){
			  $scope.recipesNew.splice($scope.item,1);
			  $localStorage.recipesNew = $scope.recipesNew;
			}else{
				localStorage.removeItem('ngStorage-recipesNew');
				location.reload();
			}
		}
}]);