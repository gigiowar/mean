module.exports = function (app){

	var controller = app.controller.user;

	controller.deleteUser = function(req,res){
		var userId = req.params.id;
		users = users.filter(function(user){
			return user._id != userId;
		});
		res.status(204).end();
	};
}