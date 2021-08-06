const express = require('express');
const app = express();
const config = require('./config');

const mongoose = require('mongoose');
mongoose.connect(config.getDBConnection(), {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('Connected to Database');
}).catch((err)=>{
    console.log('Error connecting Database');
});

const seedTodoData = require('./controllers/setupTodos');
const apiController = require('./controllers/apiController');

const PORT = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use('/assets',express.static(__dirname+'/public'));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authenticate"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
})

app.listen(PORT ,(req,res)=>{
    console.log(`Hello Express is listining on port ${PORT}`);
})

seedTodoData(app);
apiController(app);