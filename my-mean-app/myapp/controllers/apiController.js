const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://sachaduv:OMzk9zsKL3p4g4cv@mean.1ayhi.mongodb.net/Nodejs?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var  Schema = mongoose.Schema;
var personSchema = new Schema({
    firstName : String,
    lastName : String,
    address : String
})

var Persons = mongoose.model('Person', personSchema);


module.exports = function(app){
    app.get('/api',(req,res)=>{
        Persons.find({},(err,user)=>{
            if(err) throw err;
            res.json(user);
        })
    }) 
}