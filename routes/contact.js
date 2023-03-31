const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootPath = require('../util/path');
const router = express.Router();
//-----------------------------------------------------

router.use(bodyParser.urlencoded({extended: false}));

router.get('/contact', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'contact.html'));
});

router.post('/contact', (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
});
module.exports = router;