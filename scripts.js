 var myImg = angular
 				.module("myModule",[])
 				.controller("myController",function($scope){
											var country = {
											name 		: "USA",
											cap		: "ees",
											flag 	: "Images/usa-flag.png" 	
										};
											$scope.country = country;
										});