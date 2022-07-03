const {Swaggiffy} = require('swaggiffy');
require('./models/db/db');

const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const {ProductRoute} = require('./routes/product.route');

const PORT = 5008;

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/api/products', ProductRoute);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

new Swaggiffy().setupExpress(app).swaggiffy();