var connect = require("../config/connect");

module.exports.find=function(where, cb){
	connect(function(err, client){ 
		var db = client.db("tss4");
		db.collection("product").find(where).toArray(cb);
	});
}



module.exports.findbysort=function(where, sorttype, cb){
	connect(function(err, client){ 
		var db = client.db("tss4");
		db.collection("product").find(where).sort(sorttype).toArray(cb);
	});
}




module.exports.insert=function(obj, cb){
	connect(function(err, client){
		var db = client.db("tss4");
		db.collection("product").insert(obj, cb);
	});
}
module.exports.remove=function(where, cb){
	connect(function(err, client){
		var db = client.db("tss4");
		db.collection("product").remove(where, cb);
	})
}
module.exports.update=function(where, obj, cb){
	connect(function(err, client){
		var db = client.db("tss4");
		db.collection("product").updateMany(where, { $set : obj} ,cb);
	})	
}