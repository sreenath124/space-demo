var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var Router = require('./routes');
var User = require('./model/User.js');
var Vacation = require('./model/vacation_model.js');

window.app = window.app = {};

$(function(){


	app.node = $('#app');

	app.user = new User();
	
	app.router = new Router();
	Backbone.history.start({pushState: false});
	app.vacation = new Vacation();

	
	app.router.navigate("/login", {trigger: true, replace: true});

	

})
