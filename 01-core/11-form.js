'use strict';

const http = require('http').createServer(webServer),
      form = require('fs').readFileSync('./assets/form.html'),
      queryString = require('querystring'),//obtener y analizar la ruta de direcciones
      util = require('util');//nos da diferentes utilidades
let dataString = '';
function webServer(req, res) {
    if (req.method == 'GET') {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(form);
    }
    if (req.method == 'POST') {
        req.on('data', data => dataString += data)//como se manda por paquete loso vamos añadiendo en datastring dataString es un objecto buffer
           .on('end', () => {
               let dataObject = queryString.parse(dataString),//parse()-> conbierte objeto a string
                   dataJSON = util.inspect(dataObject),//la utilidad que estamos usando es convertir de objeto a formato JSON
                   html = `<p>los datos que enviaste por post como string son: ${dataString}</p>
                            <p>los datos que enviaste por POST como JSON son: ${dataJSON}</p>`;
                console.log(html);
                res.end(html);//mando el codigo a la web
           })
    }
}
http.listen(3000, 'localhost', () => console.log('servidor corriendo en http://localhost:3000'));


