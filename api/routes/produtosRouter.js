var express = require('express');
var router = express.Router();

let produtosController = require('../controllers/produtosController');

router.get('', produtosController.find);
router.get('/:index',  produtosController.findById);
router.post('', produtosController.create);
router.put('/:index',  produtosController.update);
router.delete('/:index',  produtosController.destroy);

module.exports = router;