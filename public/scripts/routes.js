var Backbone = require('backbone');
var $ = require('jquery');

var Login = require('./view/Login.js');

module.exports = Backbone.Router.extend({
    initialize: function (options) {
    },

    routes: {
        "login": "login",
        "home": "home",
    },

    login: function() {
        console.log('in login');

        var login = new Login({});
        $('#app').html( login.render().$el );
    },

    home: function(query, page) {
        // ...
    }
});