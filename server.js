var http = require('http');
var port = 3000;
var handleRequest = require('./modules/handleReguests');

var server = http.createServer(function(req, res){
    handleRequest(req, res);
});

server.listen(port, function () {
    console.log("You are listening on port: " + port);
});
