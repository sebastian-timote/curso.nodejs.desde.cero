'use strict';
const express = require('express'),
      app = express();

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`))//tiene que ser una ruta absoluta; node tiene una variable llamada __dirname que almacena la ruta del disco duro
    .listen(3000, () => console.log('iniciando express en el puerto 3000'))//porque puerto va a escuchar