import { Swaggify } from 'swaggiffy';

const express = require('express');
const app = express();

app.listen(5008, () => {
    console.log('Server is running 2');
});


new Swaggify().setupExpress(app).swaggify();
