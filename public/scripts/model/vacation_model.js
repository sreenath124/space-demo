var Backbone = require('backbone');
var $ = require('jquery');

module.exports= Backbone.Model.extend({
	defaults: {
		no_of_days : '1',
		vacation_from :'----',
		vacation_to :'----',
		type:'paid',
		approver :'nishin',
		approver_copy:'HR',
		comments:''
	}
});