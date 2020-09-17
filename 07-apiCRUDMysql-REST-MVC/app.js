'use strict';

const express = require('express'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),//es un visor de eventos vemos las peticiones que le hacen a la aplicacion en consola
      routes = require('./routes/index'),
      favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
      publicDir = express.static(`${__dirname}/public`),
      viewDir = `${__dirname}/views`,
      port = (process.env.PORT || 3000);

let app = express();
/* USO DE LOS MIDDLEWARE*/

app.set('views', viewDir)
    .set('view engine', 'pug')
    .set('port', port)

    .use(bodyParser.json())//me permite manipular el envio de informacion de la  en json
    .use( bodyParser.urlencoded({ extended: false}))//nos permite que los form puedan estar enviando variables
    .use( publicDir)
    .use( favicon)
    .use( morgan('dev'))
    .use( routes );

module.exports = app;