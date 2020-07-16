'use strict';
const express = require('express'),
      app = express();

app.get('/', (req, res) => res.end('<h1>hola mundo desde express.js</h1>'))//obtiene una url
    .listen(3000, () => console.log('iniciando express en el puerto 3000'))//porque puerto va a escuchar