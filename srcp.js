 var myImg = angular
 				.module("myModule",[])
 				.controller("imgController",function($scope){
											var country = {
											name : "USA",
											cap: "ees",
											flag 	: "Images/usa-flag.png" 	};
											$scope.country = country;
										});
 myImg.controller("myController",function ($scope){
 	var emp = {
 		fname : "David",
 		lname : "jason",
 		age : 	"10"
 	}
 	$scope.emp = emp;
 });
 