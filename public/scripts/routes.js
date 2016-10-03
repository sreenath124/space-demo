var Backbone = require('backbone');
var $ = require('jquery');

var Login = require('./view/Login.js');
var User = require('./model/User.js');
var Vacation_collection = require('./collection/vacation_collection.js');
var Vacation_form = require('./view/vacation_view_form.js');
var Vacation_requestList = require('./view/vacation_view_ul.js');

module.exports = Backbone.Router.extend({
    initialize: function (options) {
    },

    routes: {
        "login": "login",
        "home": "home",
        "vacation_request": "vacation"
    },

    login: function() {
        console.log('in login');

        app.login = new Login({ model: app.user });

        app.node.html( app.login.render().$el );
    },

    home: function(query, page) {
        console.log('in home');
        // ...
    },

    vacation: function(query, page){
       // console.log('in vacation');
        app.collection = new Vacation_collection();
        app.vacList = new Vacation_requestList({collection :app.collection});
        app.vacForm = new Vacation_form({collection : app.collection});       
        app.node.html( app.vacForm.render().$el);
        app.node.append(app.vacList.render().$el);
 
    }
});