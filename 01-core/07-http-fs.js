'use strict'
const http = require('http').createServer(webServer),
      fs = require('fs');

function webServer(req, res) {
    res.writeHead(200, {'content-Type':'text/html'});
    res.end('<h1>hola node.js en la web </h1>');
}

http.createServer(webServer)
    .listen(3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/'));
