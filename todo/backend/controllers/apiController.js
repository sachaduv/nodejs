const Todos = require('../models/todoSchema');
var bodyParser = require('body-parser')


module.exports = function(app){

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    
    app.get('/api/todos',(req,res)=>{
        Todos.find({},(err,data)=>{
            if(err) throw err;
            res.status(200).json(data);
        })
    })

    app.get('/api/todos/:uname',(req,res)=>{
        var uname = req.params.uname;
        Todos.find({uname: uname},(err,data)=>{
            if(err) throw err;
            res.json(data);
        })  
    })

    app.get('/api/todo/:id',(req,res)=>{
        var id = req.params.id;
        Todos.findById(id,(err,data)=>{
            if(err) throw err;
            res.json(data);
        })  
    })

    app.post('/api/todos',(req,res)=>{

        if(req.body.id){
            Todos.findByIdAndUpdate(req.body.id,{
                todo : req.body.todo,
                isDone : req.body.isDone,
                hasAttachment : req.body.hasAttachment,
            }, (err,data)=>{
                res.send('Updated Sucessfully');
            })
        }else{
            var todo = Todos({
                uname : 'test',
                todo : req.body.todo,
                isDone : req.body.isDone,
                hasAttachment : req.body.hasAttachment
            })

            todo.save((err)=>{
                if(err) throw err;
                res.send('Saved Sucessfully');
            })
        }
    })

    app.delete('/api/todos',(req,res)=>{
        Todos.findByIdAndRemove(req.body.id,(err)=>{
            if(err) throw err;
            res.send('Removed Sucessfully');
        })
    })
}