// MARK: - Imports
var express = require('express');
var middleware = require('./controllers/middleware.js');
var fs = require('fs');


// MARK: - Configuration
var app = express();
var PORT = 3000;


// MARK: - Middleware
app.use(middleware.logger);

app.get('/content-cms/forms/*', function (req, res) {
	function removeStore(the_url) {
		var the_arr = the_url.split('/');
		the_arr.pop();
		return( the_arr.join('/') );
	}

	var relativePath = removeStore(req.path)
	var path = __dirname + '/static' + relativePath + '.json';
	fs.readFile(path, 'utf8', function (err, data) {
		if (err) throw err;
		res.send(JSON.parse(data));
	});
});

app.get('/*', function (req, res) {
	var path = __dirname + '/static' + req.path + '.json';
	fs.readFile(path, 'utf8', function (err, data) {
		if (err) res.status(409).send({ message: 'File not found' });
		res.send(JSON.parse(data));
	});
});


// MARK: - Listen port
app.use(express.static(__dirname + '/static'));
app.listen(PORT, function () {
	console.log('Bershka-Dummy server started on port ' + PORT + '!');
});