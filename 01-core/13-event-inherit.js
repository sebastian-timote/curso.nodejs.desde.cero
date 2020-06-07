//en el archivo 14 se ve otra forma de hacerlo en Emmascript 6 si el modulo es muy grande
'use strict';

const EventEmiter = require('events').EventEmitter,//llama al modulo events y a la clase de los events emiter
      inherits = require('util').inherits;//actua como el comportamiento de herencia en POO

function Clock() {
    setInterval( () => this.emit('tictac'), 1000); 
};

inherits(Clock,EventEmiter);//en php seria class Clock implements EventEmiter

Clock.prototype.theTime = function () {
    let date = new Date(),
        hour = date.toLocaleTimeString();
    console.log(hour);
};

let cucu = new Clock();
cucu.on('tictac', () => {
    cucu.theTime();
})

