const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootPath = require('../util/path');
const productsController = require('../controller/product');
const router = express.Router();
//-----------------------------------------------------

router.use(bodyParser.urlencoded({extended: false}));

router.get('/contact', productsController.getContact);

router.post('/contact', productsController.postContact);
module.exports = router;