const express = require('express');
const path = require('path');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactRoute = require('./routes/contact');
const successRoute = require('./routes/success');
const errorController = require('./controller/error');
//--------------------------------------------------------------------

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use(successRoute);
app.use(errorController.error404);

//SERVER RUNNING
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`SERVER RUNNING ON PORT ${PORT}`);
    } else {
        console.log(err);
    }
});


