const express = require('express');
const app = express();
const port = 8000;

require('./routes')(app);

app.listen(port, ()=>{
    console.log('Сервер запущен на порту '+port);
});