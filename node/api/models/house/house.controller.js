'use strict';

var Controller = require('../../utils/controller');
var Helper = require('../../utils/helper');
var co = require('co');

var _          = require('lodash');

module.exports = function(House){
  class HouseController extends Controller {
    constructor(){
      super(House);
    }
    get(req,res) {
      co(function* () {
        let hosues = yield this.Model.find(req.query).exec();
        return hosues;
      }.bind(this))
      .then(Helper.respondWithResult(res))
      .catch(Helper.handleError(res));
    };
  }
  return HouseController;
}