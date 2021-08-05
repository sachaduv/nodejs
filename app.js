// const module1 = require('./module1');
const Person = require('./functions');
const greet = require('./greet/index');
const pattern1 = require('./modulePatterns/pattern1');
const pattern2 = require('./modulePatterns/pattern2');
const pattern3 = require('./modulePatterns/pattern3');
const Greet = require('./modulePatterns/pattern4');
const greet5 = require('./modulePatterns/pattern5');
const mutateExports = require('./modulePatterns/exports-vs-moduleExports');
const util = require('util');
//const EventEmitter = require('./eventEmitter');
const EventEmitter = require('events');
const config = require('./config.json');
const GreetClass = require('./classes');
const fp = require('./handling_files');
const fs = require('fs');
const zlib = require('zlib');
const http = require('http');
const moment = require('moment');
const express = require('express'); 
const app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');


var jsonParser = bodyParser.json()


// module1();

var person = new Person('Sai Teja','Chaduvula');

console.log(person.greet());
//console.log(person.__proto__);
console.log(greet.english());
console.log(greet.spanish());
console.log(pattern1());
console.log(pattern2.greet());
console.log(pattern3.greet());

const grt = new Greet();
console.log(grt.greet());
console.log(greet5.greet());
mutateExports.greet();
var name = 'Sai Teja';
var greeting = util.format('Hello, %s',name);

util.log(greeting);


var event = new EventEmitter();
event.on(config.GREET,function(){
    console.log('On Greeting 1');
})

event.on(config.GREET,function(){
    console.log('On Greeting 2');
})

event.emit(config.GREET);

function Greets(){
    EventEmitter.call(this);
    this.name = 'Sai Teja';
}

util.inherits(Greets,EventEmitter);

Greets.prototype.greet = function(data){
    console.log('Name : ' + this.name);
    console.log('Data is : '+data);
    this.emit('greet',data);
}

var greets = new Greets();

greets.on('greet',function(data){
    console.log('Greeting event emitted '+data);
})

greets.greet('Good Evening');


var greetsClass = new GreetClass('Sai Teja from class');

greetsClass.on('greet',function(data){
    console.log('Greeting event emitted from class '+data);
})

greetsClass.greet('Good Evening from class');

//Buffers
var buf = Buffer.alloc(10,'Hello','utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);
buf.write('wo');
console.log(buf.toString());

//Array Buffers
var ary_buf = new ArrayBuffer(8);
var view = new Int32Array(ary_buf);
view[0] = 5;
view[1] = 15;
view[2] = 20;
console.log(view);

var fp_buf =  fp;

console.log(fp_buf.sync);

var reader = fs.createReadStream(__dirname+'/lorem.txt',{encoding:'utf8',highWaterMark:32 * 1024});
var writer = fs.createWriteStream(__dirname+'/lorem_copy.txt');
var compressed = fs.createWriteStream(__dirname+'/compressed.txt.gz');

// reader.on('data',(chunk)=>{
//     console.log(chunk.length);
//     writer.write(chunk);
// })

var zlib_file = zlib.createGzip();
reader.pipe(zlib_file).pipe(compressed);

console.log(moment().format('ddd, hA'));
//pass by value and pass by refernce - > Objects share same location in memory

//IIFC is the root for module

//Creating a Server
// http.createServer((req,res)=>{
//     res.writeHead(200,{
//         'Content-Type':'text/plain'
//     })

//     if(req.url === '/'){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         fs.createReadStream(__dirname+'/page1.html').pipe(res);
//     }
//     else if(req.url === '/api'){

//         res.writeHead(200,{'Content-Type':'application/json'})
//             var obj = {
//                 firstName :'Sai Teja',
//                 lastName : 'Chaduvula'
//             }
        
//             obj = JSON.stringify(obj);
//             res.end(obj);  
//     }else{
//         res.writeHead(404,{'Content-Type':'text/plain'});
//         res.end('No Such Resourse Available');
//     }

//     // var page1 = fs.readFileSync(__dirname+'/page1.html','utf8');
//     //var page1 = fs.createReadStream(__dirname+'/page1.html',{encoding:'utf8'}).pipe(res);
//     // page1 = page1.replace('{Message}','Sai Teja...');

//     // res.end(page1);
// }).listen(3000,'127.0.0.1');

//Creating express server
const PORT = process.env.PORT || 3000
app.listen(PORT);

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');

app.use('/assets',express.static(__dirname+'/styles.css'));

mongoose.connect('mongodb+srv://sachaduv:OMzk9zsKL3p4g4cv@mean.1ayhi.mongodb.net/Nodejs?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var  Schema = mongoose.Schema;
var personSchema = new Schema({
    firstName : String,
    lastName : String,
    address : String
})

var Persons = mongoose.model('Person', personSchema);

var sai = new Persons({
    firstName: 'Sai',
    lastName:'Chaduvula',
    address : '18-51 vskp india'
})

sai.save((err)=>{
    if(err) throw err;
    console.log('Sai Object is saved');
})

app.use('/',(req,res,next)=>{
    //console.log(`Request URL : ${req.url}`);
    Persons.find({},(err,users)=>{
        if(err) throw err;
        console.log(users);
    })
    next();
})

app.get('/',(req,res)=>{
    // res.send(`<html>
    //     <head>
    //         <title>Express Demo</title>
    //     </head>
    //     <body>
    //         <h2>Welcome to Express Demo</h2>
    //     </body>
    // </html>`)

    res.render('index');
})

app.get('/api',(req,res)=>{
    res.json({
        firstName:'Sai Teja',
        lastName:'Chaduvula'
    })
})

app.get('/person/:id',(req,res)=>{
//     res.send(`<html>
//     <head>
//     <link href=assets/styles.css></link>
//         <title>Express Demo</title>
//     </head>
//     <body>
//         <h2>Welcome to ${req.params.id}</h2>
//     </body>
// </html>`)

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