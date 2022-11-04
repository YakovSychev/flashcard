

require('@babel/register');
const ssr = require('./midllewar/ssr')

const express = require('express'); 

const app = express(); 

const PORT = 3000; 

const mainRoute = require('./routes/mainRoute');

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json()); // обязательные 2 строки, разобраться конкретнее
app.use(ssr); // запускается мидлварка
//app.use(express.static('public')); // статические файлы (клиент)
app.use('/', mainRoute); //запускаем все роуты по порядку

app.listen(PORT, () => {
  console.log('Я пытался..., а порт?');
}); // здесь работает листенер