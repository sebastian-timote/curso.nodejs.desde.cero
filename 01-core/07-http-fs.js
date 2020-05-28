'use strict'
const http = require('http').createServer(webServer),
      fs = require('fs');

function webServer(req, res) {
    res.writeHead(200, {'content-Type':'text/html'});
    fs.readFile('./assets/index.html',(err, data) => err ? console.log(err.message) : res.end(data));
}

http.listen(3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/'));