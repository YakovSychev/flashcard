require('@babel/register');
const express = require('express');
const reactSSR = require('./middleware/reactSSR');
const cardPageRouter = require('./routes/cardPageRouter');

const app = express();
const PORT = 3000;

app.use(reactSSR);
app.use('/card', cardPageRouter);

app.listen(PORT, () => console.log('Привет, Ульяна!'));
