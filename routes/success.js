const express = require('express');
const path = require('path');
const productsController = require('../controller/product');
const rootPath = require('../util/path');
const router = express.Router();
//-----------------------------------------------------

router.get('/success', productsController.getSuccess);
module.exports = router;