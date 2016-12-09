 var myImg = angular
 				.module("myModule",[])
 				.controller("imgController",function($scope){
											var country = {
											name 		: "USA",
											cap		: "ees",
											flag 	: "Images/usa-flag.png" 	
										};
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

myImg.controller("arrayController",function ($scope){
										 	var employees = [
										 		{fname : "David", lname : "jason" , salary : "54500" },
										 		{fname : "David", lname : "jason" , salary : "54500" },
										 		{fname : "David", lname : "jason" , salary : "54500" }
										 	];
										 	$scope.employees = employees;
											});
myImg.controller("eventController",function($scope){
	var tech = [
	{ name: "PHP", likes:0,dislikes:0},
	{ name: "Python", likes:0,dislikes:0},
	{ name: "Angularjs", likes:0,dislikes:0},

	];
	$scope.tech = tech;
	$scope.incLikes = function(techology){
		techology.likes++;
	}
	$scope.desLikes = function(techology){
		techology.dislikes++;
	}
});

myImg.controller("filterController",function ($scope){
	var employees = [
		{name: "Ben",  DOB : "1980-11-23T00",salary :"515000", gender :"Male" },
		{name: "John", DOB : "1980-11-23T00",salary :"9955000", gender :"Male" },
		{name: "Tony", DOB : "1980-11-23T00",salary :"955000", gender :"Male" },
		{name: "steve",DOB : "1980-11-23T00",salary :"5825000", gender :"Male" },
	];
	$scope.employees = employees;
	$scope.rowLimit = 4;
	$scope.sortColum = "salary";

	$scope.search = function(item){
			if($scope.searchText == undefined){
				return true;
			}else
			{
						if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1){
							return true;
						}
			}
			return false;
	}
});