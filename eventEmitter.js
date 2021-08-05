function EventEmitter(){
    this.event = {

    }
}

EventEmitter.prototype.on = function(type,listner){
    this.event[type] = this.event[type] || [];
    this.event[type].push(listner);
}

EventEmitter.prototype.emit = function(type){
    this.event[type].forEach(item => {
        item();
    });
}

module.exports = EventEmitter;