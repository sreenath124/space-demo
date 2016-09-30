var Backbone = require('backbone');
var $ = require('jquery');

module.exports = Backbone.View.extend({
	render: function() {
		this.$el.html( $('<p>In login</p>') );

		return this;
	}
})