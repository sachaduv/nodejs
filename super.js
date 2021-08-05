const util = require('util');

function Person(){
    this.firstName = 'Sai Teja';
    this.lastName = 'Chaduvula'
}

Person.prototype.greet = function(){
    console.log(`Hello ${this.firstName} ${this.lastName}`)
}

function Officer(){
    Person.call(this); //calling super constructor and assigning constructor variables of Person to this of Officer
    this.badgeName = 'ECEB419'
}

util.inherits(Officer,Person);

var officer = new Officer();

officer.greet();