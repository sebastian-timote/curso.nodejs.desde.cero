'use strict'

function imprimir(error,content) {//se usa para no hacer la cabeza de delfin
    console.log(content);
}
const fs = require('fs');
console.log('\n abriendo archivo...');
let content = fs.readFile('archivo.txt', 'utf8',imprimir )

console.log('\n haciendo otra cosa');
console.log(process.uptime());