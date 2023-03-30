const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootPath = require('../util/path');
const router = express.Router();
//-----------------------------------------------------

router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body.product);
    res.redirect('/');
});
module.exports = router;