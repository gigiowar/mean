var mongoose = require("mongoose");

module.exports = function(){
	var schema = mongoose.Schema({
		_user:{
			type:mongoose.Schema.Types.ObjectId,
			required:true
		},
		sku:{
			type:Number,
			required:true
		},		
		nome:{
			type:String,
			required:true
		},
		imagem:{
			type:String,
			required:true
		}
	});
	return mongoose.model("Order", schema);
};