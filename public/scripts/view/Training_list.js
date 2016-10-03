var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var tmpl = require('../templates/training_template.js');
var list = require('../templates/trainings.js');
module.exports = Backbone.View.extend({
	el:$('#app'),
	initialize:function(){
		this.render();
	},
	render: function() {
		var template = _.template(tmpl);
		var trainList = _.template(list);
		this.$el.append( template );
		this.collection.fetch();
    console.log(this.collection);
    return this;
	}

});
		


	
