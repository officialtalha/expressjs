const express = require('express');
const path = require('path');
const rootPath = require('../util/path');
const router = express.Router();
//-----------------------------------------------------

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootPath, 'views', 'shop.html'));
});

// router.get('*', (req, res, next) => { 
//     res.send(`<h1>404 PAGE NOT FOUND!</h1>`);
// })

// router.use((req, res, next) => { 
//     res.send(`<h1>404 PAGE NOT FOUND!</h1>`);
// })

module.exports = router;