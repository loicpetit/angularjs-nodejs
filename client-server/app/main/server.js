const express = require('express');
const http = require('http');
const path = require('path');

var server = null;
var app = express();

//  Paths
app.use(express.static(__dirname + '/public'));
app.use('/jquery', express.static(path.join(__dirname, '../../node_modules/jquery/dist')));
app.use('/bootstrap', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist')));
app.use('/angular', express.static(path.join(__dirname, '../../node_modules/angular')));
app.use('/angular-ui-router', express.static(path.join(__dirname, '../../node_modules/angular-ui-router/release')));

//  Démarrage / arrêt du serveur
exports.start = function (port) {
    //  check if running
    if (server !== null) {
        console.log('Server already running');
        return;
    }
    //  set port
    if (!port) {
        throw new Error('A port is required !');
    }
    //  Launch server
    server = http.createServer(app).listen(port, function () {
        console.log('Server listening on port ' + port);
    });
}

exports.stop = function () {
    if (server !== null) {
        server.close();
        server = null;
        console.log('Server closed');
    }
}

exports.restart = function () {
    exports.close();
    exports.start();
}