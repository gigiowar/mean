module.exports = function (app){

	var controller = app.controllers.order;

	app.route("/addresses")
		.get(controller.listaOrders)
		.post(controller.salvaOrder);

	app.route("/addresses/:id")
		.get(controller.obtemOrder)
		.delete(controller.removeOrder);

};