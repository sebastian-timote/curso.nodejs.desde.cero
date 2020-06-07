'use strict';

const EventEmiter = require('events').EventEmitter,//llama al modulo events y a la clase de los events emiter
      ee = new EventEmiter();

ee.on('myevent', message => console.log(message))//on() -> si el evento se dispara se ejecuta este automaticamente
  .once('myevent', message => console.log(`se emite la primera vez: ${message}`));//once()-> si el evento se dispara se ejecuta solo la primera vez

ee.emit('myevent', 'soy un emisor de eventos');//emit()-> dice que en el evento myevent voy a mitir el mensaje
ee.emit('myevent', 'volviendo a emitir');
ee.removeAllListeners('myevent')//remueve los eventos escuchas
ee.emit('myevent', 'volviendo a emitir por tercera vez');



