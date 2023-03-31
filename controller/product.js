const path = require('path');
const rootPath = require('../util/path');
const bodyParser = require('body-parser');

//---------------------------------------------------------------------

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body.product);
    res.redirect('/');
}

exports.shopProduct = (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'shop.html'));
}

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'contact.html'));
}

exports.postContact = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
}

exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'success.html'));
}