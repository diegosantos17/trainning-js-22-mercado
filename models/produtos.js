const mongoose = require('mongoose');

const produtos = mongoose.Schema(
    {
		imageCapa: {
			type: String
		},
        descricao: {
            type: String,
            required: [true, 'Nome é obrigatório']
        },
		precoOriginal: {
            type: String            
        },
		categoria: {
            type: String            
        },
		descontoEmPercentagem: {
            type: Number            
        },
		parcelasMaximaSemJuros: {
            type: Number            
        },
		parcelasMaximaSemJuros: {
            type: Number           
        },
		freteFull: {
            type: Boolean            
        },
		freteGratis: {
            type: Boolean            
        },
		imagens: {
            type: [String]            
        },
		estoque: {
            type: Number            
        }	
    }, { collection: "produtos" });

module.exports = mongoose.model('produtos', produtos);

