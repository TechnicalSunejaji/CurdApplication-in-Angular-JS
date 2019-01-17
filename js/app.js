var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
	//console.log("In myContoller...");
	
	$scope.newUser = {};
	$scope.checkedUser = {};
	$scope.message = "";
	$scope.clickedUser ={};
	$scope.users = 
	[
		{FNAME:"Nikhil",LNAME:"Singh",EMAIL:"nikhilsingh2311@gmail.com"}
	];
	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "User added Successful";
	};

	$scope.selectUser = function(user, index){
		console.log(index);
		//$scope.clickedUser = user;
		$scope.index_key = index;
		angular.copy(user, $scope.clickedUser);
	};

	$scope.updateUser = function(updated_user){
		//console.log(user);
		$scope.users[$scope.index_key] = updated_user;
		$scope.index_key ="";
		$scope.clickedUser = {};
	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
	};
});
