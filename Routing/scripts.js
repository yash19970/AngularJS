 var myApp = angular
 				.module("demo",["ngRoute"])
 				.config(function ($routeProvider){
 				 					$routeProvider
 				 					.when("/",{
 				 						templateUrl :'Template/trial.html',
 				 						 controller :'homeController'
 				 					})
 				 					.when("/home",{
 				 						templateUrl :'Template/home.html',
 				 						 controller :'homeController'
 				 					})
 				 					.when("/courses",{
 				 						templateUrl : "Template/courses.html",
 				 						 controller 	: "coursesController"
 				 					})
 				 					.when("/students",{
 				 						templateUrl : "Template/students.html",
 				 						 controller : "studentsController"
 				 					})
 				 					.otherwise({
 				 						redirectTo : "/home"
 				 					})
 				 				});
myApp.controller("homeController",function($scope){
				$scope.message = "Home Page";
										});
myApp.controller("coursesController",function($scope){
											$scope.courses = ["C#","PHP","ANGULAR"];
										});
myApp.controller("studentsController",function($scope,$http){
 											$http.get('http://localhost/angularproject/index.php/Angularapi/viewall')
 												 .then(function(response){
 													$scope.students = response.data; })
});
myApp.controller("dataController",function($scope,$http){
 											$http.get('http://localhost/angularproject/index.php/Angularapi/viewall')
 												 .then(function(response){
 													$scope.students = response.data; })
});
