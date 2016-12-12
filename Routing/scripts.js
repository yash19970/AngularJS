 var myApp = angular
 				.module("demo",["ngRoute"])
 				.config(function ($routeProvider){
 				 					$routeProvider
 				 					/*.when("/",{
 				 						templateUrl :'Template/trial.html',
 				 						 controller :'homeController'
 				 					})*/
 				 					.when("/home",{
 				 						 templateUrl :'Template/home.html',
 				 						 controller :'homeController',
 				 						 caseInsensitiveMatch : 'true'
 				 					})
 				 					.when("/courses",{
 				 						 templateUrl : "Template/courses.html",
 				 						 controller 	: "coursesController",
 				 						 caseInsensitiveMatch : 'true'
 				 					})
 				 					.when("/students",{
 				 						 templateUrl : "Template/students.html",
 				 						 controller : "studentsController",
 				 						 caseInsensitiveMatch : 'true'
 				 					})
 				 					.when("/students/:id",{
 				 						templateUrl     : "Template/studentdetails.html",
 				 						 controller 	: "studentDetailsController",
 				 						 caseInsensitiveMatch : 'true'
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
myApp.controller("studentDetailsController",function($scope,$http,$routeParams){
										$http({
											url : "http://localhost/angularproject/index.php/Angularapi/viewallbyid",
											params: { id:$routeParams.id },
											method : "get",
										})
										.then(function(response){
											$scope.student = response.data; 
										})
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
