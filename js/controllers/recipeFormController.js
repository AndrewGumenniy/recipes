recipeApp.controller('recipeFormController',
  ['$scope', '$localStorage', function($scope, $localStorage) {

    var recipesNew;
    if($localStorage.recipesNew===undefined){
      recipesNew=[];
    }else{
      recipesNew=$localStorage.recipesNew;
    }
   
    $scope.ingredients = [
      {},{},{}
    ]

    $scope.add = function () {
      $scope.ingredients.push({});
    };
 
    $scope.addReciept = function () {
      
      $scope.recipesNew = $localStorage.recipesNew;

      var recipeFromForm = {
        title: $scope.title,
        description: $scope.description,
        photoUrl: $scope.photoUrl,
        time:$scope.time,
        ingredients:$scope.ingredients,
        instruction: $scope.instruction
      }

      recipesNew.push(recipeFromForm);

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
