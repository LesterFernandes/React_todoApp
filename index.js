var express = require('express');
var Q = require('q');
var bodyParser = require('body-parser');

var server = express();
var port = 3000; 

server.set('view engine', 'ejs');
server.use(express.static('public'));

server.use(bodyParser.json());

server.get('/',function(req, res){
	res.render('view');
});


server.listen(port, function() {
    console.info('Express listening on port ', port);
});