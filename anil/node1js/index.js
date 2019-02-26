var express = require("express");
var index = express();

index.listen(3004,function(){
	console.log("Server Running")
});