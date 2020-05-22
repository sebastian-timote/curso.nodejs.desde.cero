'use strict'

const fs = require('fs');
console.log('\n abriendo archivo...');
let content = fs.readFile('archivo.txt', 'utf8',(error, content) => {
    console.log(content);
})

console.log('\n haciendo otra cosa');
console.log(process.uptime());