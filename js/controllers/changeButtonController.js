recipeApp.controller('changeButtonController',
  ['$scope', '$routeParams','$localStorage', function ($scope, $routeParams, $localStorage) {
    $scope.item = $routeParams.itemId;
    $scope.recipesNew = $localStorage.recipesNew;
    var ingredientsArray=[];
   
    $scope.title=$scope.recipesNew[$scope.item].title;
    $scope.photoUrl=$scope.recipesNew[$scope.item].photoUrl;
    $scope.description=$scope.recipesNew[$scope.item].description;
    $scope.time=$scope.recipesNew[$scope.item].time;
    $scope.instruction=$scope.recipesNew[$scope.item].instruction;
    
    $scope.add = function () {
      $scope.ingredients.push({});
    };
    if($scope.recipesNew[$scope.item].ingredients[0].name===undefined){
      for (var i = 0; i < $scope.recipesNew[$scope.item].ingredients.length; i++) {
    		 ingredientsArray.push({name:$scope.recipesNew[$scope.item].ingredients[i]})
    	};
			$scope.ingredients=ingredientsArray;     
    }else{
    	$scope.ingredients=$scope.recipesNew[$scope.item].ingredients;
		}

    if($localStorage.recipesNew===undefined){
      recipesNew=[];
    }else{
      recipesNew=$localStorage.recipesNew;
    }
    
    $scope.addReciept = function () {
      
      $scope.recipesNew = $localStorage.recipesNew;
      var oldLiked=$scope.recipesNew[$scope.item].liked;
      var oldPlanned=$scope.recipesNew[$scope.item].planned;
      var oldPurchase=$scope.recipesNew[$scope.item].purchase;

      var recipeFromForm = {
        title: $scope.title,
        description: $scope.description,
        photoUrl: $scope.photoUrl,
        time:$scope.time,
        ingredients:$scope.ingredients,
        instruction: $scope.instruction,
        liked:oldLiked,
        planned:oldPlanned,
        purchase:oldPurchase
      }

      $scope.recipesNew.splice($scope.item, 1, recipeFromForm);
      $scope.deleteAll = function () {
        localStorage.removeItem('ngStorage-recipesNew');
        location.reload();
      } 
      $localStorage.recipesNew = recipesNew;
    		document.location.href = '#/myRecipes';
    	};

    	$scope.checkTitle = function(event) {   
    	  if (event.target.value.length > 199 && event.keyCode != 8) event.preventDefault();  
    	}

    	$scope.checkDescription = function(event) {   
    	  if (event.target.value.length > 1999 && event.keyCode != 8) event.preventDefault();  
    	}
    	$scope.checkPhotoUrl = function(event) {   
    	  if (event.target.value.length > 199 && event.keyCode != 8) event.preventDefault();  
    	}
    	$scope.checkTime = function(event) {   
    	  if (event.target.value.length > 3 && event.keyCode != 8) event.preventDefault();  
      
    	  if(event.keyCode>47&&event.keyCode<58||event.keyCode==8||event.keyCode==190||event.keyCode==191||event.keyCode==37||event.keyCode==39){
      	}else{
      	  event.preventDefault();
      	}
    	}
    	$scope.checkIngredient = function(event) {   
    	  if (event.target.value.length > 99 && event.keyCode != 8) event.preventDefault();  
  	  }
  	  $scope.checkInstruction = function(event) {   
  	    if (event.target.value.length > 9999 && event.keyCode != 8) event.preventDefault();  
  	  }
 }]);
