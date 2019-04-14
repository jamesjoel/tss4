var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http){
	$scope.newData={};
	$scope.Spinner=true;



	$scope.getData=[];
	$scope.getAllData=function(){
		
		$http({
			url : "/api/emp",
			method : "get"
		}).then(function(res){
			$scope.getData=res.data;
			// console.log(res.data);
		});
	}

	$scope.addNew=function(){
		
			$scope.Spinner=false;
		$http({
			url : "/api/emp",
			method : "post",
			data : $scope.newData
		}).then(function(res){
			// console.log(newData);
			$scope.getData.push(res.data.ops[0]);
			$scope.Spinner=true;
			$("#mymodal").modal("hide");
		});
	}

	$scope.askDel=function(x){
		$scope.delObj=x;
	}


	$scope.del=function(){
		$http({
			url : "/api/emp/delete",
			method : "post",
			data : $scope.delObj
		}).then(function(res){
			var n = $scope.getData.indexOf($scope.delObj);
			$scope.getData.splice(n, 1);
			$("#delmodal").modal("hide");
			// res.send(result);
		})
	}
})