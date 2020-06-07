/*
    modulos (require/exports)
    require(<paquete o ruta>)
        importar modulos(paquetes, otros ficheros)
        garantia: una unica vez devuelve el modulo

        exports.propiedadPublica = <valor>
            el otro lado del mecanismo
            se puede exportar cualquier valor
*/
'use strict';
const Clock = require('./Clock'),//el metodo require busca archivos con extension node - js - json
      myData = require('./my-data'),
      cucu = new Clock();// el ./ dice que busque en la carpeta en la que esta el archivo
//cucu.theTime();
console.log(myData.name,
            myData.email,
            myData._phone);



