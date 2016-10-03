var Backbone = require('backbone');
var $ = require('jquery');
var Train_list = require('./view/Training_list.js');
var Login = require('./view/Login.js');
var User = require('./model/User.js');


module.exports = Backbone.Router.extend({
    initialize: function (options) {
    },

    routes: {
        "login": "login",
        "home": "home",
        "Training": "Training"
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
    Training:function(){
        app.trainingList = new Train_list();
        app.node.html( app.trainingList.render().$el );

    }
});