const http = require('http');

const app = require('./app');

var port = process.env.PORT || 8081;

console.log('AngularJS NodeJS Rest Server');
http.createServer(app).listen(port, function () {
    console.log('Server listening on port ' + port);
});