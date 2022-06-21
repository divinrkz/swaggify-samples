import { Swaggiffy } from 'swaggiffy';

const express = require('express');
const app = express();

require('./models/user.model')
const userRoute = require('./routes/user.route')

console.log(userRoute);

app.use('/users', userRoute)

app.listen(5008, () => {
    console.log('Server is running 2');
});

const swaggify = new Swaggiffy().setupExpress(app).swaggiffy();
