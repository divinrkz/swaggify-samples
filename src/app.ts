import express from 'express';

const app = express();
const port = 4008;

app.get('/', (req, res) => {
    // render the index template
    return res.send('App opening');
});

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

