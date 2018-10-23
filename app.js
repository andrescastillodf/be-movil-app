'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//routes here 
var phone_routes = require('./routes/phone');

//bodyParser config
var jsonParser       = bodyParser.json({limit:1024*1024*20, type:'application/json'});
var urlencodedParser = bodyParser.urlencoded({ extended:true,limit:1024*1024*20,type:'application/x-www-form-urlencoded' })
app.use(jsonParser);
app.use(urlencodedParser);



//http Headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  
    next();
  });

//main routes here
app.use('/api',phone_routes);
app.get('/',function(req,res){
   res.status(200).send({message: 'Welcome to Movil-test App'});
});

module.exports = app;
