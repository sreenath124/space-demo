    

var express = require('express'),
	path    = require('path'),
	http    = require('http');
    // routes  = require('./routes');
var app = express();



var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: false
})); 

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/public/index.html');
});


//app.post('/login', routes.login);

var server = http.createServer(app);
server.listen(8085);
console.log('Listening on port 8085...');