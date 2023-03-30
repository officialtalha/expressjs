const express = require('express');
const path = require('path');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
//--------------------------------------------------------------------

const app = express();
const PORT = 4000;

app.use('/admin',adminRoute);
app.use(shopRoute);

app.use((req, res, next) => { 
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

//SERVER RUNNING
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`SERVER RUNNING ON PORT ${PORT}`);
    } else {
        console.log(err);
    }

});


