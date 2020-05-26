'use strict'
//http es un event emitter emisor de eventos
const http = require('http').createServer();

function webServer(req, res) {
    res.writeHead(200, {'content-Type':'text/html'});
    res.end('<h1>hola node.js en la web como emisor de eventoss</h1>');
}

http.on('request', webServer)//cuando hay un apeticion que ejecute la funcion
    .on('error', err => console.log('ocurrio un error:', err.message))
    .listen(3000, 'localhost', () => console.log('Servidor corriendo con eventos en http://localhost:3000/'));
