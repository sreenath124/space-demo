var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var tmpl = require('../templates/training_template.js');
var list = require('../templates/trainings.js');
module.exports = Backbone.View.extend({
	render: function() {
		var template = _.template(tmpl);
		var trainList = _.template(list);
		this.$el.html( template );

		return this;
	}

	
	
})