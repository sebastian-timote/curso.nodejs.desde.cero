/*
streams
    'chorros' de informacion que se transmiten en 'pedazos' (chunks)
    3 tipos: lectura /escritura /duplex
    instancias de Eventemitter
    acceso asincrono
    es raro crear streams directamente
    pero muchos recursos nos ofrecen este interfaz
    detras de muchos mecanismos de node.js
        stdin/stdout
        request de http
        sockets
        manipulacion de ficheros/imagenes

*/
const fs = require('fs');//file system para manipular archivos
 let readStream = fs.createReadStream('./assets/nombres.txt'),//lee archivo
     writeStream = fs.createWriteStream('./assets/nombres_copia.txt');//escribir en un nuevo archivo crea el archivo

readStream.pipe(writeStream);
readStream.on('data', chunk => {
    console.log(chunk);
    console.log(chunk.toString());
    console.log('he leido: ', chunk.length, 'caracteres');
}).on('end', () => console.log('termine de leer el archivo'))
  .on('error', error => console.log('ocurrio un error: ', error.message));




