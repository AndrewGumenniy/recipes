recipeApp.controller('myRecipesItemController', 
	['$scope', '$routeParams','$localStorage', function ($scope, $routeParams, $localStorage) {
    $scope.item = $routeParams.itemId;
		$scope.recipesNew = $localStorage.recipesNew;
		var ingredientsArray=[];
    $scope.id=$scope.item;
		var minText;
		var hoursText;
		$scope.title=$scope.recipesNew[$scope.item].title;
		$scope.time=$scope.recipesNew[$scope.item].time;
		
		function hours(){
			if($scope.timeInHour===1)
			{
				hoursText="час";
			}
			else if($scope.timeInHour>1&&$scope.timeInHour<5)
			{
				hoursText="часa";
			}
			else{
				hoursText="часов";
			}
		
		}
		
		function minutes(){
			if($scope.time==='0'&&$scope.time!==undefined){
					$scope.time='1';
				}
				if($scope.time!==undefined){
					if($scope.time<9||$scope.time>20){
						if($scope.time.indexOf("1")>=0){
							minText="минута";
						}else if($scope.time<10&&$scope.time.indexOf("2")===0||$scope.time.indexOf("3")===0||$scope.time.indexOf("4")===0){
							minText="минуты";
						}else if($scope.time.indexOf("2")===1||$scope.time.indexOf("3")===1||$scope.time.indexOf("4")===1){
							minText="минуты";
						}else{
							minText="минут";
						}
					}else{
						minText="минут";
					}
				}
		}
		if($scope.time/60<1){
			minutes();
		}else{
			
			$scope.timeInHour=Math.floor($scope.time/60);
			hours();
			$scope.time=String($scope.time%60);
			minutes();
			
		
		}
		$scope.hoursText =hoursText;
		$scope.minutesText =minText;
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

		

  $scope.choiseWindowDialog = function() {
    $scope.popUpDialogContent = 'Удалить данный рецепт?';
    $scope.showPopUpDialog = true;
  }
	
}])

recipeApp.directive('popUpDialog', function(){
		  return {
			restrict: 'E',
			scope: false,
			template: '<div id="popUpDialog-bg" ng-show="showPopUpDialog"> \
				 <div id="popUpDialog"> \
				  <div class="content">{{ popUpDialogContent }}</div> \
				  <div class="clearfix buttons-container"> \
					<div class="pull-left"> \
					  <button class="btn btn-delete big" ng-click="popUpDialogApprove()">Да</button> \
					</div> \
					<div class="pull-right"> \
					  <button class="btn btn-change" ng-click="closePopUpDialog()">Нет</button> \
					</div> \
				  </div> \
				  </div> \
				</div>',
				
				
			controller: function( $scope ) {

			  $scope.showPopUpDialog = false;

			  $scope.closePopUpDialog = function() {
				$scope.showPopUpDialog = false;
			  }

			  $scope.popUpDialogApprove = function() {
				if($scope.recipesNew.length>1){
				
				  $scope.recipesNew.splice($scope.item,1);
				  localStorage.recipesNew = $scope.recipesNew;
				  document.location.href = '#/myRecipes';
				  
				}else{
				
				  localStorage.removeItem('ngStorage-recipesNew');
				  document.location.href = '#/myRecipes';
				  location.reload();
				  
			    }
				
			  }
			}
		  }
		})