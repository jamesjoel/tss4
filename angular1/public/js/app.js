var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http){
	
	$scope.a = "rohit";
	$scope.b="male";

	$scope.arr=[
		{
			name : "sony",
			price : 2500
		},
		{
			name : "htc",
			price : 2000
		},
		{
			name : "i-phone",
			price : 4500
		},
		{
			name : "MI",
			price : 7000
		}

	];

	$scope.show=function(){
		$http({
			url : "/show",
			method : "get"
			
		}).then(function(res){
			// console.log(res.data);
			$scope.demo=res.data;
		});
	}


});
