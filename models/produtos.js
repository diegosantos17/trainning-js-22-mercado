const mongoose = require('mongoose');

const produtos = mongoose.Schema(
    {
        descricao: {
            type: String,
            required: [true, 'Nome é obrigatório']
        },
    }, { collection: "produtos" });

module.exports = mongoose.model('produtos', produtos);

