function Greet(){
    this.greeting = 'Hello, this is Pattern4';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greet;