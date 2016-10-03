var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
module.exports = Backbone.Model.extend({
	url: '/login',

	defaults: {
		email: '',
		password: '',
		isLoggedIn: false
	},

	validate: function(attrs) {		
			var regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
				app.error='';

			if ( !attrs.email ) {
				app.error += ' Email empty.';
				/*console.log(error);*/
			};

			if ( attrs.email && !regex.test(attrs.email) ) {
				app.error += ' Invalid email.';
				/*console.log(error);*/
			};

			if ( !attrs.password ) {
				app.error += ' Password empty.';
				/*console.log(error);*/
			};

			return app.error;
		}
});






