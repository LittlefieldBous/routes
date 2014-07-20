/*app.js file*/

angular.module("MyApp",['ngRoute']) //depending on ng route

.config(function($routeProvider){ //register the route provider 

$routeProvider.when('/view1',{ //when method takes 2 inputs: 
templateUrl : "View1.html", 
controller : "View1Controller" //what controller it should use for the view 
 }).when('/view2',{
	templateUrl : "View2.html",
	controller : "View2Controller" 
   }).otherwise({  
	   redirectTo : "/view1"
	   });

})
  
  
  .controller("View1Controller", function($scope){
  $scope.test = "Hello World 1";

  
  })
  
  
  controller("View2Controller", function($scope){
  $scope.test = "Hello World 2";

  
  })

  
  .controller("MyAppController", function($scope){	
$scope.test = "Hello World";
	

 }) 
 
 
 
  
 