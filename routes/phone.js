'use strict'

var express = require('express');
var phoneController = require('../controllers/phone');

var api = express.Router();

api.get('/phone/:id?', phoneController.getPhone);

module.exports = api;