const server = require('./server');

console.log('AngularJS NodeJS Client Server');
server.start(process.env.PORT || 8082);