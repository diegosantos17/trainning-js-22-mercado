const express = require("express");

var server = express();

server.listen(3000, '0.0.0.0', (err) =>{
	console.log("Servidor de pé na porta 3000");
});
