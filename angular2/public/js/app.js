var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http){
	$scope.newData={};
	$scope.showSpinner=true;



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
		$scope.showSpinner=false;
		$http({
			url : "/api/employee",
			method : "post",
			data : $scope.newData
		}).then(function(res){
			$scope.allData.push(res.data.ops[0]);
			$scope.showSpinner=true;
			$("#addModal").modal("hide");
		});
	}
	$scope.askDelete=function(x){
		$scope.delObj = x;
	}
	$scope.delete=function(){
		$http({
			url : "/api/employee/delete",
			method : "post",
			data : $scope.delObj
		}).then(function(res){
			var n = $scope.allData.indexOf($scope.delObj);
			$scope.allData.splice(n, 1);
			$("#delModal").modal("hide");
		});
	}
});
