/*app.js file*/

angular.module("MyApp",['ngRoute']) //depending on ng route

.config(function($routeProvider){ //register the route provider 

$routeProvider.when('/view1',{ //when method takes 2 inputs: 
templateUrl : "View1.html", 
controller : "View1Controller" //what controller it should use for the view 
 }).when('/view2',{
	templateUrl : "View2.html",
	controller : "View2Controller"
	
	 }).when("/view3/:paramTest",{
	templateUrl : "View3.html",
	controller : "View3Controller"
	 
   })
   
   .otherwise({  
	   redirectTo : "/view1"
	   });

 })
  
  
  .controller("View1Controller", function($scope, dataService){
  $scope.test = "Hello World 1";

        $scope.Recipes = dataService.getRecipes();

        $scope.addRecipe = function() {
            dataService.addRecipe({
                recipe: $scope.recipe_title,
                ingredients: $scope.recipe_ingredients,
                directions: $scope.recipe_directions,
                category: $scope.recipe_category,
                notes: $scope.recipe_notes
            });

            $scope.recipe_title = '';
            $scope.recipe_ingredients = '';
            $scope.recipe_directions = '';
            $scope.recipe_category = '';
            $scope.recipe_notes = '';

        }


        $scope.deleteRecipes = function(deletedRecipes){
            dataService.removeRecipes(deletedRecipes);


        }


})
  
  
  .controller("View2Controller", function($scope){
  $scope.test = "Hello World 2";

  
  })
  
  
   .controller("View3Controller", function($scope,$routeParams){
  $scope.test = "Hello World 3";

    $scope.otherTest = $routeParams.paramTest;
  
  })

  
  .controller("MyAppController", function($scope){	
$scope.test = "Hello World";
	

 })




