var Backbone = require('backbone');
var $ = require('jquery');

var vacation_model = require('../model/vacation_model.js');
module.exports = Backbone.Collection.extend({
	model : vacation_model
})
