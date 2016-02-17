//Express config file
var express = require("express");

module.exports = function(){

	var app = express();

	//Set express port
	app.set("port",3000);

	//middleware
	app.use(express.static("./public"));

	return app;
};
