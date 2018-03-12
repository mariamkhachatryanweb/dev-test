'use strict';

let mongoose = require('mongoose');
mongoose.Promise = Promise;

var HouseSchema = new mongoose.Schema({
  type: String,
  colour: String
}, {
  usePushEach: true
});

module.exports = mongoose.model('House', HouseSchema);
