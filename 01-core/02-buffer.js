/*
buffers
    es una tira de bytes(datos binarios)
    similar a un arreglo y con tamaño determinado
    con los buffer podemos manipular datos directamente de:
        socket -> son un tipo de buffer que nos permiten la comunicacion bidireccional
        streams -> son chorros de informacion que se envian
        implementar protocolos complejos
        criptografia
        manipulacion de ficheros

    son como las computadoras se comunican

*/

let buf = new Buffer.alloc(26);//longitud de buffer
console.log(
    buf,
    buf.length,
    buf.toString()
);
for (let index = 0; index < buf.length; index++) {
    //97 en ASCII es A
    buf[index] = index + 97;
    
}
console.log( buf.toString());//tostring()-> lo combierte a letras