'use strict'

var path = require('path');
var fs = require('fs');
var phone = require('../models/phone');

function getPhone(req, res){
    //res.status(200).send({message: 'get Phone test'});
    var phoneId = req.params.id;
    if(!phoneId){
        phone.find().exec((err, result) => {
            if(err){
              res.status(500).send({message: 'Request error.'});
            }else{
              if(!result){
                res.status(404).send({message: 'Not found'});
              }else{
                // var quantity = result.length;
                return res.status(200).send({
                  result
                });
              }
            }
        });        
    }else{
        phone.findById(phoneId,(err, result) => {
            if(err){
              res.status(500).send({message: 'Request error.'});
            }else{
              if(!result){
                res.status(404).send({message: 'Not found'});
              }else{
                return res.status(200).send({
                  result
                });
              }
            }
        });        
    }
}

module.exports = {
  getPhone
};
