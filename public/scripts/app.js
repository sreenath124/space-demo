var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var Router = require('./routes');

$(function(){
	console.log('hello');

	var r = new Router({});
	Backbone.history.start({pushState: false});

	r.navigate("/login", {trigger: true, replace: true});

	console.log('hello world');
})
