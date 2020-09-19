'use strict';

const express = require('express'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      restFul = require('express-method-override')('_method'),//este ultimo es un campo oculto que enviamos en express para indicar que vamos a utilizar todo s los metodos http que usa restful
      routes = require('./routes/team-router'),
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
    .use( restFul)
    .use( routes );

module.exports = app;