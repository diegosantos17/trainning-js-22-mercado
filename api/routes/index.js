const express = require('express');
const router = express.Router(); 

const produtosRouter = require('./produtosRouter');
router.use('/produtos', produtosRouter);

module.exports = router;