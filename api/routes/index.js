const express = require('express');
const router = express.Router(); 


//#region | PROFILES
const produtosRouter = require('./produtosRouter');
router.use('/produtos', produtosRouter);
//#endregion

module.exports = router;