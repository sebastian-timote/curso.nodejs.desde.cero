'use strict'

const fs = require('fs');

let promise = new Promise((resolve, reject) => {
    fs.readFile('archivo.txt', 'utf8',(error, content) => {
        return (error) ? reject( new Error('El archivo no se pudo leer')) : resolve(content);
    })
})
console.log('\n abriendo archivo...');
 promise.then( promiseData => console.log( promiseData.toString())) 
        .catch(error => console.log(error.message));
console.log('\n haciendo otra cosa');
console.log(process.uptime());