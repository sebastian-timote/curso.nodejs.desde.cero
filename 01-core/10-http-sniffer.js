'use strict';

const http = require('http'),
      options = {
          host : 'wormax.io',
          port : 80,
          path : '/'//hacia que ruta quiero entrar
      };

let htmlCode = '';//vamos a lamacenar la info del cliente

function httpClient(res) {
    console.log(`el sitio ${options.host} he respondido. Codigo de estado: ${res.statusCode}`);
    res.on('data', data => {
        htmlCode += data;//capturo la data de la pagina en este caso el html
        console.log(data, data.toString());
    })
}
function httpError(err) {
    console.log(`el sitio ${options.host} no respondio. Codigo de estado: ${err.code}.Error: ${err.message}`);
}
function webServer(req, res) {
    res.writeHead(200, {'content-Type':'text/html'});
    res.end(htmlCode);
}
//instancia cliente de HTTP
http.get(options,httpClient)
    .on('error', httpError)
//instancia servidor de http

http.createServer(webServer)
    .listen(3000,'localhost', () => console.log('servidor corriendo en http://localhost:3000/'));




