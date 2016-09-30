var Backbone = require('backbone');
var $ = require('jquery');

var User = require('../model/User.js');


module.exports = Backbone.View.extend({
	render: function() {
		this.$el.html( $('<p>In login</p>') );

		return this;
	},

	gotoHome: function (router) {
		router.navigate("/home", {trigger: true, replace: true});
	},

	// logout: function() {
	// 	this.model.set({
	// 		email: '',
	// 		password: '',
	// 		isLoggedIn: false
	// 	})
	// }
})