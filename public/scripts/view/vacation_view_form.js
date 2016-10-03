var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var vacation_collection = require('../collection/vacation_collection.js');
var templ = require('../templates/vacationRequest.js');



module.exports = Backbone.View.extend({
    initialize: function() {

    },
    render: function() {
        var template = _.template(templ);
        this.$el.html(template);
        // console.log("inside form");
        return this;
    },
    events: {
        'click input[type=submit]': 'onClick',
    },

    onClick: function() {

        this.collection.push({
            no_of_days: $('#days').val(),
            vacation_from: $('#vacation_from').val(),
            vacation_to: $('#vacation_to').val(),
            type: $('#vacation_type').val(),
            approver: $('#approver').val(),
            approver_copy: $('#approver_copy').val(),
            comment: $('textarea').val()
        });

        $('#days').val('');
        $('#vacation_from').val('');
        $('#vacation_type').val('');
        $('#approver').val('');
        $('#approver_copy').val('');
        $('textarea').val('');

        //console.log(this.collection);

    }
});
