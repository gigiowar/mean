var mongoose = require("mongoose");

module.exports = function(){
	var schema = mongoose.Schema({
		user_email:{
			type:String,
			required:true
		},
		rua:{
			type:String,
			required:true
		},		
		cidade:{
			type:String,
			required:true
		},
		estado:{
			type:String,
			required:true
		}
	});
	return mongoose.model("Address", schema);
};