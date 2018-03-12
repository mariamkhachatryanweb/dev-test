'use strict';

var Controller = require('../../utils/controller');
var Helper = require('../../utils/helper');
var co = require('co');

var _          = require('lodash');

module.exports = function(Person){
  class PersonController extends Controller {
    constructor(){
      super(Person);
    }
    get(req,res) {
      co(function* () {
        let persons = yield this.Model.find(req.query).exec();
        return persons;
      }.bind(this))
      .then(Helper.respondWithResult(res))
      .catch(Helper.handleError(res));
    };
  }
  return PersonController;
}