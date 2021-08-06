const Todo = require('../models/todoSchema');

var todoList = [
    {
        uname : 'test',
        todo : 'To Complete Mongo Part',
        isDone : false,
        hasAttachment : false,
    },
    {
        uname : 'test',
        todo : 'To Attend Bachi Party',
        isDone : false,
        hasAttachment : false,
    },
    {
        uname : 'test',
        todo : 'To Draw with Ammu',
        isDone : false,
        hasAttachment : false,
    },
    {
        uname : 'test',
        todo : 'To Learn Paino',
        isDone : false,
        hasAttachment : false,
    }
]

module.exports = function(app){

    app.get('/seedTodoData',(req,res)=>{
        Todo.create(todoList,(err,result)=>{
            res.send(result);
        }) 
    }) 

}



