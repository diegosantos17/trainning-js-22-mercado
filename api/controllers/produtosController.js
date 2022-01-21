const read = (req, res, next) => {
	let produtos = [{
		imageCapa:
			"https://http2.mlstatic.com/D_Q_NP_859377-MLA48263979530_112021-AB.webp",
		descricao: "Samsumg Galaxy",
		precoOriginal: 1859,
		categoria: "eletronico",
		descontoEmPercentagem: 16,
		parcelasMaximaSemJuros: 12,
		freteFull: false,
		imagens: [
			"https://http2.mlstatic.com/D_Q_NP_723494-MLA47678954738_092021-AB.webp",
			"https://http2.mlstatic.com/D_Q_NP_723494-MLA47678954738_092021-AB.webp",
			"https://http2.mlstatic.com/D_Q_NP_723494-MLA47678954738_092021-AB.webp",
			"https://http2.mlstatic.com/D_Q_NP_723494-MLA47678954738_092021-AB.webp",
		],
		estoque: 999,
	}];

	res.status(200).send(true);
};

module.exports = {
	read,
};