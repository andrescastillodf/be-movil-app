'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phoneSchema = Schema({
    id: Number,
    title: String,
    description: String,
    color: String,
    price: Number,
    image_route: String
});
module.exports = mongoose.model('phone', phoneSchema);