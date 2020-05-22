/*
    organizacion del codigo
        librerias /modulos
        constantes
        objetos/variables
        funciones
        eventos
        ejecuciones
    
    usar camelCase
        cuando una instruccion tenga una sola palabra, va en minuscula ej. require()
        solo las clases rompen esta regla, va en mayuscula la letra inicial ej. EventEmiter()
        cuando una instruccion tenga 2 o mas palabras, apartir de la segunda la primer letra va en mayuscula
        ej.m createServer()
*/
'use strict'//modo estricto para programar con buenas practicas
//console.log(window);//window no existe en node
console.log(global)
setInterval( () => {
    console.log('hola node.js' + new Date()) 
},1000)

//con ctrl C detengo la ejecucion de un script en la consola

