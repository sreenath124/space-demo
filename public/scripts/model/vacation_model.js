var Backbone = require('backbone');
var $ = require('jquery');

module.exports= Backbone.Model.extend({
	defaults: {
		no_of_days : '',
		vacation_from :'',
		vacation_to :'',
		type:'',
		approver :'',
		approver_copy:'',
		comments:''
	}
});