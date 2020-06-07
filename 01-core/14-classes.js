'use strict';

class Clock {

    constructor() {
        setInterval( () => this.theTime(), 1000); 
    }

    theTime() {
        let date = new Date(),
            hour = date.toLocaleTimeString();
        return console.log(hour);
    };
}

let cucu = new Clock();
//cucu.theTime();