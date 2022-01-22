const produtosService = require("../../services").produtosService;

const find = async function (req, res, next) {
	try {
		const produtos = await produtosService.find(req.query);
		res.status(200).send(produtos);
	} catch (error) {
		res.statusCode = error.errors ? 400 : 500;
		res.send(error);
	}
};

const findById = async function (req, res, next) {
	try {
		const profile = await produtosService.findById(req.params.index);
		res.status(200).send(profile);
	} catch (error) {
		res.statusCode = error.errors ? 400 : 500;
		res.send(error);
	}
};

const create = async function (req, res, next) {
	try {
		const result = await produtosService.create(req.userJwt, req.body);
		res.status(201).send(result);
	} catch (error) {
		res.statusCode = error.errors ? 400 : 500;
		res.send(error);
	}
};

const update = async function (req, res, next) {
	try {
		const result = await produtosService.update(
			req.userJwt,
			req.params.index,
			req.body
		);
		res.status(204).send(result);
	} catch (error) {
		res.statusCode = error.errors ? 400 : 500;
		res.send(error);
	}
};

const destroy = async function (req, res, next) {
	try {
		const result = await produtosService.destroy(
			req.userJwt,
			req.params.index
		);
		res.status(202).send(result);
	} catch (error) {
		res.statusCode = error.errors ? 400 : 500;
		res.send(error);
	}
};

module.exports = {
	find,
	findById,
	create,
	update,
	destroy,
};
