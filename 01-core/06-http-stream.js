'use strict'
const http = require('http').createServer(webServer),
      fs = require('fs'),
      index = fs.createReadStream('./assets/index.html')//lee un string 

function webServer(req, res) {
    res.writeHead(200, {'content-Type':'text/html'});
    index.pipe(res);//lo que esta guardado en index lo mande a la respuesta
}

http.listen(3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/'));
