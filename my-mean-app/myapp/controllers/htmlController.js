const bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()


module.exports = function(app){

        app.get('/',(req,res)=>{    
            res.render('index');
        })

        app.get('/person/:id',(req,res)=>{
            res.render('person',{ID:req.params.id, qstr : req.query.qstr})
        })
        
        app.post('/person',urlencodedParser,(req,res)=>{
            res.send('Thank You');
            console.log(req.body.firstName);
            console.log(req.body.lastName);
        })
        
        app.post('/personJSON',jsonParser,(req,res)=>{
            res.send('Thank you for JSON Data application/JSON type')
            console.log(req.body.firstName);
            console.log(req.body.lastName);
        })
}