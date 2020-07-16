'use strict';
//para probar este archivo tenemos que enviar por la url los parametros id, name, age http://localhost:3000/user/12345Az!-sebasTimo-23
const express = require('express'),
      app = express();

app.get('/', (req, res) => res.end('<h1>hola mundo desde express.js</h1>'))//get()-> obtiene una url
    //http://localhost:3000/user/12345Az!-sebasTimo-23
    .get('/user/:id-:name-:age', (req, res) => {//: los dos puntos significan que vamos a enviar parametros por la url
        res.end(`<h1>${req.params.name}, bienvenid@ a Express :) tu id es <b>${req.params.id}
                </b> y tienes ${req.params.age} a&ntilde;os</h1>`);

    })
    .get('/search', (req, res) => {//necesita recibir el parametro s por la url 
        res.end(`<h1>Bienvenido a express, los resultados de tu b&uacute;squeda son:
                <mark>${req.query.s}</mark></h1>`)
    })
    .listen(3000, () => console.log('iniciando express en el puerto 3000'))//porque puerto va a escuchar