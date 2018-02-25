var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
	console.log("In myContoller...");
	
	$scope.newUser = {};
	$scope.checkedUser = {};
	$scope.message = "";

	$scope.users = 
	[
		{FNAME:"Nikhil",LNAME:"Singh",EMAIL:"nikhilsingh2311@gmail.com"}
	];
	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "User added Successful";
	};

	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.updateUser = function(user){

	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
	};
});