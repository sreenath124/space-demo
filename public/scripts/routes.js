var Backbone = require('backbone');
var $ = require('jquery');

var Login = require('./view/Login.js');
var User = require('./model/User.js');


module.exports = Backbone.Router.extend({
    initialize: function (options) {
    },

    routes: {
        "login": "login",
        "home": "home",
    },

    login: function() {
        console.log('in login');

        app.login = new Login({ model: app.user });

        app.node.html( app.login.render().$el );
    },

    home: function(query, page) {
        console.log('in home');
        // ...
    }
});