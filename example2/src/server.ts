import { Swaggiffy } from 'swaggiffy';

const express = require('express');
const app = express();

require('./models/user.model')
const userRoute = require('./routes/user.route')

app.use('/users', userRoute)

app.listen(5008, () => {
    console.log('Server is running 2');
});

new Swaggiffy().setupExpress(app).swaggiffy();

