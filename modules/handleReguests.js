var fs = require('fs'),
    handleMimeType = require('./handleMimeType');

module.exports = function(req, res) {
    // Check if link exists on disk
    if (fs.existsSync('public' + req.url)) {
        // Checking if public/url is directory
        if (fs.lstatSync('public' + req.url).isDirectory()) {
            // render index.html if it exists in directory
            if (fs.existsSync('public' + req.url + 'index.html')) {
                res.setHeader('Content-Type', 'html');
                res.end(fs.readFileSync('public' + req.url + 'index.html'));
            } else {
                // display 'Can not read directory' if no index.html found in directory
                res.end('Can not read directory');
            };
        } else {
            // if the url is not a directory get the file in fileContent
            // getting the header for the file
            // display file
            var fileContent = fs.readFileSync('public' + req.url);
            res.setHeader("Content-Type", handleMimeType('public' + req.url));
            res.end(fileContent);
        }
    }
};
