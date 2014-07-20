/*app.js file*/

angular.module("MyApp",['ngRoute']) //depending on ng route

.config(function($routeProvider){ //register the route provider 

$routeProvider.when('/view1',{ //when method takes 2 inputs: path:view1 and the object  templateURL : "View1.html",  //object with value of view 1
  controller : "View1Controller" //and what controller it should use for the view 
  }).when('/view2',{ //path2
	templateUrl : "View2.html", 
	controller : "View2Controller"
  }).otherwise({ //default url incase the others dont work
     redirectTo : "view1" 	//redirects to view 1
			
});

})

.controller("View1Controller", function($scope){
  $scope.test = "Hello World 1: This is View 1";		
})


.controller("View2Controller", function($scope){
  $scope.test = "Hello World 2: This is View2";		
})


.controller("MyAppController", function($scope){	
$scope.test = "Hello World";
	
	
})