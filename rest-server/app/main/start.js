const server = require('./server');

console.log('AngularJS NodeJS Rest Server');
server.start(process.env.PORT || 8081);