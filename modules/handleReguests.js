var fs = require('fs'),
    handleMimeType = require('./handleMimeType');

module.exports = function(req, res) {
    if (fs.existsSync('public' + req.url)) {
        if (fs.lstatSync('public' + req.url).isDirectory()) {
            if ('public' + req.url + 'index.html') {
                res.setHeader('Content-Type', 'html');
                res.end(fs.readFileSync('public' + req.url + 'index.html'));
            }
            res.end('Can not read directory');
        } else {
            var fileContent = fs.readFileSync('public' + req.url);
            res.setHeader("Content-Type", handleMimeType('public' + req.url));
            res.end(fileContent);
        }
    }
};
