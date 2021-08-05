function Greet(){
    this.greeting = 'Hello, this is Pattern3';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greet();