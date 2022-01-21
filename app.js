const express = require("express");
const routes = require('./api/routes');
const cors = require("cors");

var server = express();
server.use(express.json());
server.use(cors());
server.use(routes);

server.listen(3000, '0.0.0.0', (err) =>{
	console.log("Servidor de pé na porta 3000");
});
