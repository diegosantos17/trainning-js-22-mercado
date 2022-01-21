var express = require('express');
var router = express.Router();

let produtosController = require("../controllers/produtosController");

router.get("", produtosController.read);

module.exports = router;