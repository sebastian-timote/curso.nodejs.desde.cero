'use strict'
const http = require('http').createServer(webServer),
      fs = require('fs'),
      path = require('path'),
      url = require('url'),
      urls = [
          {
            id : 1, 
            route : '',
            html : './assets/index.html'
          },
          {
            id : 2,
            route : 'acerca',
            html : './assets/acerca.html'
          },
          {
            id : 3,
            route : 'contacto',
            html : './assets/contacto.html'
          }
      ]

function webServer(req, res) {
    var pathURL = path.basename(req.url),
        id = url.parse(req.url,true).query.id;//el true es para que ejecute query string
    console.log(`path:${pathURL}, id: ${id}`);
    urls.forEach(function (pos) {
        if (pos.route == pathURL || pos.id == id) {//puede acceder por el url ejemplo en la ruta  ?id=2
            res.writeHead(200, {'content-Type':'text/html'});
            fs.readFile( pos.html ,(err, data) => err ? console.log(err.message) : res.end(data));


        }
    });
    if (!res.finished) {
        res.writeHead(200, {'content-Type':'text/html'});
        fs.readFile('./assets/404.html',(err, data) => err ? console.log(err.message) : res.end(data));
    }

}

http.listen(3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/'));