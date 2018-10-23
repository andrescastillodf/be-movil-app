'use strict'

var mongoose = require ('mongoose');
var app = require('./app');
var http = require('http');

var port = process.env.PORT || 3977;
mongoose.connect('mongodb://localhost:27017/movil',{useNewUrlParser:true},(err, res) =>{
  if(err){
    throw err;
  }else{
    console.log("The database is connected");  
    app.listen(port, function(){
        console.log("The server is running on port"+port);
    });
  }
});


