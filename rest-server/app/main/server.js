const express = require('express');
const http = require('http');

const store = require('./dao/store');
const tacheService = require('./services/tache-service');

var server = null;
var port = 8080;
var running = false;

//  RestAPI
var app = express();
app.get('/', function (req, res) {
    res.send('Welcome AngularJS NodeJS Rest API');
});
app.get('/taches', tacheService.findAll);

exports.start = function (customPort) {
    //  check if running
    if (running) {
        console.log('Server already running');
        return;
    }
    //  set port
    if (customPort) {
        port = customPort;
    }
    //  Clear store
    store.clear();
    //  Launch server
    server = http.createServer(app).listen(port, function () {
        running = true;
        console.log('Server listening on port ' + port);
    });
}

exports.stop = function () {
    if (server !== null) {
        server.close();
        server = null;
        running = false;
        console.log('Server closed');
    }
}

exports.restart = function () {
    if (running) {
        exports.close();
    }
    exports.start();
}