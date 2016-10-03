var Backbone = require('backbone');
var $ = require('jquery');

var Row = require('./vacation_view.js')
var vacation_collection = require('../collection/vacation_collection.js');

//view_Ul
module.exports = Backbone.View.extend({
     tagName: 'table',
     className: 'list',
     initialize: function() {
         this.listenTo(this.collection, "add", this.render);
     },

     render: function() {
         var lastAdded = this.collection.last();
         var row;

         if (!!lastAdded) {
             row = new Row({ 'model': lastAdded });
             this.$el.append(row.render().$el);

         }

         return this;
     }
 });