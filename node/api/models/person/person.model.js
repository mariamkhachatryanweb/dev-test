'use strict';

let mongoose = require('mongoose');
mongoose.Promise = Promise;

var PersonSchema = new mongoose.Schema({
  name: String
}, {
  usePushEach: true
});

module.exports = mongoose.model('Person', PersonSchema);
