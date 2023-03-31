const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootPath = require('../util/path');
const productsController = require('../controller/product');
const router = express.Router();
//-----------------------------------------------------

router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);
module.exports = router;