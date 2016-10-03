var Backbone = require('backbone');
var $ = require('jquery');
var trainingModel = require('../model/training_model.js')
module.exports = Backbone.Collection.extend({
	model: trainingModel,
	url: '/trainingData.json'
});