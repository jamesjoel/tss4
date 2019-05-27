var product = angular.module("product", []);
product.controller("Ctrl", function($scope, $http){
	$scope.data={};
	$scope.getPro=function(){
		$http({
			method : "get",
			url : "http://localhost:3000/api/product/getPro"
		}).then(function(res){
			console.log(res);
			$scope.data=res.data;
		})
	}
	$scope.askDel=function(data){

		
		$scope.delObj=data;
	}
	$scope.del=function(){
		$http({
			method : "post",
			url : "http://localhost:3000/api/product/del"
			data : $scope.delObj
		}).then(function(res){
			var i = $scope.data.indexOf($scope.delObj);
			$scope.data.splice(i, 1);
		})
	}

});