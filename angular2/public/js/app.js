var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http){
	$scope.newData={};

	// $scope.newData.name="";
	// $scope.newData.age="";
	// $scope.newData.salary="";



	$scope.allData = [];
	$scope.getAllData=function(){
		$http({
			url : "/api/employee",
			method :"get"
		}).then(function(res){
			$scope.allData=res.data;
		});
	}

	$scope.add=function(){
		$http({
			url : "/api/employee",
			method : "post",
			data : $scope.newData
		}).then(function(res){
			console.log(res.data);
		});
	}
});
