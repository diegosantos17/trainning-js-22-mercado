const produtos = require('../models/produtos');

const find = async function (params = null) {
    try {

        let clause = {};
        if(params && params.descricao != null && params.descricao != 'undefined'){
            clause["descricao"] = { $regex: '.*' + params.descricao + '.*' }
        }
        
        let result = await produtos.find(clause);

        return result;
    } catch (exception) {
        throw exception;
    }
};

const findById = async function (id) {
    try {
        let result = await produtos.findById(id);
        return result;
    } catch (exception) {
        throw exception;
    }
};

const create = async function (user, item) {
    try {
        item.createdAt = Date.now();        

        let result = await produtos.create(item);
        return result;
    } catch (exception) {
        throw exception;
    }
};

const update = async function (user, id, item) {
    try {
        item.updatedAt = Date.now();        

        let result = await produtos.findByIdAndUpdate(id, item);
        return result;
    } catch (exception) {
        throw exception;
    }
};

const destroy = async function (user, id) {
    try {

        let profile = await produtos.findById(id);

        profile.deletedAt = Date.now();        

        let result = await produtos.findByIdAndUpdate(id, profile);
        return result;
    } catch (exception) {
        throw exception;
    }
};

module.exports = {
    find,
    findById,
    create,
    update,
    destroy
}