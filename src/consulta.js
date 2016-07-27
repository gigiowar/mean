var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

var _idProcurado = new ObjectID("56ca5127c8ff3f940adf97a5");

MongoClient.connect("mongodb://127.0.0.1:27017/mean",
	function(erro, db){
		if(erro) throw err;
		db.collection("users").findOne({_id:_idProcurado},
			function(erro,user){
				if(erro) throw err;
				console.log(user);
			}
		);
	}	
);
