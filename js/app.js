var recipeApp = angular.module('recipeApp', [  
    'ngRoute',
    'ngStorage',
    'ngSanitize'
  ])
    .config(function($routeProvider){
        $routeProvider.when('/ideas',
        {
            templateUrl:'views/ideas.html',
            controller:'ideasController'
        });
        $routeProvider.when('/ideas/:itemId',
        {
            templateUrl:'views/ideasRecipesItem.html',
            controller:'ideasRecipesItemController'
        });
        $routeProvider.when('/lists',
        {
            templateUrl:'views/lists.html',
            controller:'listsController'
        });
		$routeProvider.when('/myRecipes',
        {
            templateUrl:'views/myRecipes.html',
            controller:'myRecipesController'
        });
		$routeProvider.when('/myRecipes/recipeForm',
        {
            templateUrl:'views/recipeForm.html',
            controller:'recipeFormController'
        });
        $routeProvider.when('/myRecipes/:itemId', {
            templateUrl: 'views/myRecipesItem.html',
            controller: 'myRecipesItemController'                  
        });
        $routeProvider.when('/myRecipes/changeButton/:itemId',
        {
            templateUrl:'views/recipeForm.html',
            controller:'changeButtonController'
        });
		
        $routeProvider.otherwise({redirectTo: '/ideas'});
    });
