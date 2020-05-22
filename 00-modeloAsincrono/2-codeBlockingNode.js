'use strict'

const fs = require('fs');
console.log('\n abriendo archivo...');
let content = fs.readFileSync('archivo.txt', 'utf8')
console.log(content);
console.log('\n haciendo otra cosa')
console.log(process.uptime());
