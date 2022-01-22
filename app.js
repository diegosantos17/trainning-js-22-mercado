const express = require("express");
const cors = require("cors");
const routes = require('./api/routes');

var server = express();
server.use(express.json());
server.use(cors());
server.use(routes);

var port = 3000;

server.listen(port, '0.0.0.0', function (err) {
    try {
        console.log(`Listening port ${port}.`);
    } catch (error) {

    }
})