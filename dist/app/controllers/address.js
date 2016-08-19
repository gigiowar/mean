module.exports = function (app){

	var Address = app.models.address;
	var User = app.models.user;

	var controller = {};

	controller.listaAddresss = function(req,res){
		var promise = Address.find().exec()
			.then(
				function(addresses){
					res.json(addresses);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	controller.obtemAddress = function(req,res){
		var _id = req.params.id;
		Address.findById(_id).exec()
		.then(
			function(address){
				if(!address) throw new Error("Address não encontrado");
			},
			function(erro){
				console.log(erro);
				res.status(404).json(erro);
			}
		);
	};

	controller.removeAddress = function(req,res){
		var _id = req.params.id;
		Address.remove({"_id" : _id}).exec()
		.then(
			function(){
				res.status(204).end();
			},
			function(erro){
				return console.error(erro);
			}
		);
	};

	controller.salvaAddress = function (req,res){
		console.log("salvaAddress");	
		var _id = req.body._id;
		var dados = { 
			"user_email" : req.body.email,
			"rua" : req.body.rua,
			"cidade" : req.body.cidade,
			"estado" : req.body.estado
		};

		User.findOne({ email: req.body.email }).exec()
		.then(
			function(user){
				if(user){
					if(_id){
						Address.findByIdAndUpdate(_id, dados).exec()
						.then(
							function(address){
								res.json(address);
							},
							function(erro){
								console.error(erro);
								res.status(500).json(erro);
							}
						);
					}
					else{
						Address.create(dados)
						.then(
							function(address){
								res.status(201).json(address);
							},
							function(erro){
								console.log(erro);
								res.status(500).json(erro);
							}
						)
					}	
				}	
				else{
					res.status(406).json("email não existente");
				}			
			
			},
			function(erro){
				console.error(erro);
				res.status(500).json(erro);
			}
		);
	};

	return controller;

};