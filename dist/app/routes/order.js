module.exports = function (app){

	var controller = app.controllers.order;

	app.route("/orders")
		.get(controller.listaOrders)
		.post(controller.salvaOrder);

	app.route("/orders/:id")
		.get(controller.obtemOrder)
		.delete(controller.removeOrder);

};