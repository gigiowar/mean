module.exports = function (app){

	var controller = app.controllers.address;

	app.route("/addresses")
		.get(controller.listaAddresses)
		.post(controller.salvaAddress);

	app.route("/addresses/:id")
		.get(controller.obtemAddress)
		.delete(controller.removeAddress);

};