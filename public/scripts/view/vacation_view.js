var Backbone = require('backbone');
var $ = require('jquery');

var vacation_collection = require('../collection/vacation_collection.js');


//view_ROw
module.exports = Backbone.View.extend({
     tagName: 'li',
     className: 'row',

     initialize: function() {
         this.listenTo(this.model, "change", this.render);
     },
     render: function() {
         var no_of_days = this.model.get('no_of_days'),
             from = this.model.get('vacation_from'),
             to = this.model.get('vacation_to'),
             type = this.model.get('type'),
             approver = this.model.get('approver');
             approver_copy= this.model.get('approver_copy'),
             comment = this.model.get('comment');

         var vacation_days,
             vacation_from,
             vacation_to,
             vacation_type,
             approver,
             comment;

        vacation_days = '<span> ' +  no_of_days + '</span>';
         vacation_from = '<span> ' + from + '</span>';
         vacation_to = '<span> ' + to + '</span>';
         vacation_type = '<span> ' + type + '</span>';
         approver = '<span>' + approver + '</span>';
         approver_copy = '<span>' + approver_copy + '</span>';
         comment = '<span> ' + comment + '</span>';


         this.$el.html(vacation_days + vacation_from + vacation_to + vacation_type + approver +approver_copy + comment);

         return this;
     }

 });
