var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http, $window){
	angular.element($window).bind("scroll", function() {
	    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
	    var body = document.body, html = document.documentElement;
	    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
	    windowBottom = windowHeight + window.pageYOffset;
	    if (windowBottom >= docHeight) {
	        //console.log("hello hello");
	        $scope.getMore();
	    }
	});

	$scope.allData = [];
	$scope.skip = 0;
	$scope.getData=function(){
		$http({
			url : "/getdata",
			method : "get"

		}).then(function(res){
			console.log(res.data);
			$scope.allData=res.data;
		});
	}

	$scope.getMore = function(){
		$scope.skip +=10;
		$http({
			url : "/moredata",
			method : "post",
			data : { skip : $scope.skip}
		}).then(function(res){
			res.data.forEach(function(x){

				$scope.allData.push(x);
			})
		});
	}

});
