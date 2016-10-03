var Backbone = require('backbone');
var $ = require('jquery');

var vacation_collection = require('../collection/vacation_collection.js');


//view_ROw
module.exports = Backbone.View.extend({
     tagName: 'tr',
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

         var date_range,
             vacation_days,
             vacation_type,
             approver,
             status,
             remarks;

       date_range = '<td>' + from + '-' + to + '</td>';
       vacation_days ='<td>'+ no_of_days + '</td>';
         vacation_type = '<td> ' + type + '</td>';
         approver = '<td>' + approver + '</td>';
         status = '<td> Pending</td>';
         remarks = '<td>Not enterd</td>';


         this.$el.html(date_range  + vacation_days + vacation_type + approver + status + remarks);
         console.log(no_of_days);
         return this;
     }

 });
