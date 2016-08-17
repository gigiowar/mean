module.exports = function (app){

	var Order = app.models.order;

	var controller = {};

	controller.listaOrders = function(req,res){
		var promise = Order.find().exec()
			.then(
				function(orders){
					res.json(orders);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.obtemOrder = function(req,res){
		var _id = req.params.id;
		Order.findById(_id).exec()
		.then(
			function(order){
				if(!order) throw new Error("Order não encontrado");
			},
			function(erro){
				console.log(erro);
				res.status(404).json(erro);
			}
		);
	};

	controller.removeOrder = function(req,res){
		var _id = req.params.id;
		Order.remove({"_id" : _id}).exec()
		.then(
			function(){
				res.status(204).end();
			},
			function(erro){
				return console.error(erro);
			}
		);
	};

	controller.salvaOrder = function (req,res){
		console.log("salvaOrder");	
		var _id = req.body._user;
		var dados = { 
			"sku" : req.body.sku,
			"nome" : req.body.nome,
			"imagem" : req.body.imagem
		};		
		if(_id){
			Order.findByIdAndUpdate(_id, dados).exec()
			.then(
				function(order){
					res.json(order);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}
		else{
			Order.create(dados)
			.then(
				function(order){
					res.status(201).json(order);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			)
		}
	};

	return controller;

};