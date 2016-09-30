var Backbone = require('backbone');
var $ = require('jquery');

module.exports = Backbone.Model.extend({
	url: '/login',

	defaults: {
		email: '',
		password: '',
		isLoggedIn: false
	},

	validate: function(attr, options) {
		var errors = [];

		if ( $.trim(attrs.email) === '' ) {
			errors.push('email cannot be empty')
		}

		if ( $.trim(attrs.password) === '' ) {
			errors.push('password cannot be empty')
		}

		if ( errors.length ) {
			return false
		}
	}
})