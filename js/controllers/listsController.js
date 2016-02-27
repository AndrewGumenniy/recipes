recipeApp.controller('listsController',
  ['$scope', '$localStorage', function($scope, $localStorage) {

    $scope.recipesNew = $localStorage.recipesNew;

    if($scope.recipesNew===undefined) {
   	  $scope.flagForLike=false;
   	  $scope.flagForPlan=false;
   	  $scope.flagForPurchase=false;
    }else{
  		for (var i = 0; i < $scope.recipesNew.length; i++) {
  			if($scope.recipesNew[i].liked==1)	{
  				$scope.flagForLike=true;
  			}
  			if($scope.recipesNew[i].planned==1)	{
  				$scope.flagForPlan=true;
  			}
  			if($scope.recipesNew[i].purchase==1)	{
  				$scope.flagForPurchase=true;
  			}
  		}
		}

}]);