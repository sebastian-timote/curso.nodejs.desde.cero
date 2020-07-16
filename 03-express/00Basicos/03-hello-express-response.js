'use strict';
//para probar este archivo tenemos que enviar por la url los parametros id, name, age http://localhost:3000/user/12345Az!-sebasTimo-23
const express = require('express'),
      app = express();

app.get('/', (req, res) =>{ 
    //res.end('<h1>hola mundo desde express.js</h1>') -> con este metodo nos dice que no vamos a enviar mas informacion
    res.send('<h1>hola mundo desde express.js</h1>')//->podemos enviar mucho mas informacion
    })
    .get('/ed', (req, res) => {//redireccinamiento
        res.redirect(301, 'https://ed.team');
    })
    .get('/json', (req, res) => { 
        res.json({
            name: "sebastian",
            age: 32,
            alias: "timo" 
        });
    })
    .get('/render', (req, res) => {
        //no funciona por que hay que configurar el tipo de views que desplegara express 
        res.render(`${__dirname}/index.html`);//render() -> es un metdo especial de express para visualizar motores de plantillas como jade o pug
    })
    
    .listen(3000, () => console.log('iniciando express en el puerto 3000'))//porque puerto va a escuchar