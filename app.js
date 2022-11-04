require('@babel/register');
const express = require('express');
const configApp = require('./config/serverConfig');

const cardPageRouter = require('./routes/cardPageRouter');
const mainRoute = require('./routes/mainRoute');

const app = express();
const PORT = 3000;

configApp(app);

app.use(express.static('public'));

app.use('/', mainRoute);
app.use('/cards', cardPageRouter);

app.listen(PORT, () => console.log('Привет, Ульяна!'));
