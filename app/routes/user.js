module.exports = function (app){

	var controller = app.controller.user;

	app.route("/users");
		.get(controller.buscaUsers);

	app.route("/users/:id");
		.get(controller.obtemUser)
		.delete(controller.removeUser);

};