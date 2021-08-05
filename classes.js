'use strict';

const EventEmitter = require("events");

// function Greets(){
//     EventEmitter.call(this);
//     this.name = 'Sai Teja';
// }

class Greets extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }

    greet(data){
        console.log('Name : ' + this.name);
        console.log('Data is : '+data);
        this.emit('greet from classes',data);
    }
}

// Greets.prototype.greet = function(data){
//     console.log('Name : ' + this.name);
//     console.log('Data is : '+data);
//     this.emit('greet',data);
// }

module.exports = Greets;
