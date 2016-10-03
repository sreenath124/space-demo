var Backbone = require('backbone');
var $ = require('jquery');
var Train_list = require('./view/Training_list.js');
var Login = require('./view/Login.js');
var User = require('./model/User.js');
var trainingCollection = require('./collection/training_collection.js');

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
        var trainInfo = new trainingCollection();
        app.trainingList = new Train_list({collection:trainInfo});
        app.node.html( app.trainingList.render().$el );

    }
});