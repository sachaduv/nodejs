const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    uname : String,
    todo : String,
    isDone : Boolean,
    hasAttachment : Boolean,
})

var Todos = mongoose.model('Todos',todoSchema)

module.exports = Todos;


