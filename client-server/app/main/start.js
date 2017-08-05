const http = require('http');

const app = require('./app');

console.log('AngularJS NodeJS Client Server');
var port = process.env.PORT || 8082;
http.createServer(app).listen(port, function () {
    console.log('Server listening on port ' + port);
});