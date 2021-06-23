// Use module exports to expose middleware

var middleware = {
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' - ' + req.method + ': ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;