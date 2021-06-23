// Use module exports to expose statics
// var path = require('path');
// var fs = require('fs');

function getFile(req, res) {
    res.status(200).send({ message: 'statics controller' })
}

module.exports = {
    getFile
};