const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const moment = require('moment');

const Tache = require('./modele/tache');

const store = require('./dao/store');
const tacheService = require('./services/tache-service');

var server = null;
var port = 8080;
var running = false;
var app = express();

//  Middlewares
app.use(bodyParser.json());

//  RestAPI
app.get('/', function (req, res) {
    res.send('Welcome AngularJS NodeJS Rest API');
});
app.get('/taches', tacheService.findAll);
app.post('/taches', tacheService.create)
app.get('/taches/:id', tacheService.find);
app.put('/taches/:id', tacheService.update);
app.delete('/taches/:id', tacheService.delete);

//  Gestion d'erreurs
function logError(err, req, res, next) {
    console.error(err.stack);
    next(err);
}
function errorHandler(err, req, res, next) {
    res.status(500);
    res.send({
        error: {
            code: err.code,
            message: err.message
        }
    });
}
app.use(logError);
app.use(errorHandler);

//  Démarrage / arrêt du serveur
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
    //  Store
    setupStore();
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

function setupStore() {
    store.clear();
    //  Taches
    tache1 = new Tache();
    tache1.id = 1;
    tache1.dateCreation = moment({ year: 2016, month: 1, day: 1 });
    tache1.dateModification = moment({ year: 2016, month: 2, day: 2 });
    tache1.libelle = 'tache 1 commune';
    store.taches.push(tache1);
    tache2 = new Tache();
    tache2.id = 2;
    tache2.dateCreation = moment({ year: 2016, month: 3, day: 3 });
    tache2.dateModification = moment({ year: 2016, month: 4, day: 4 });
    tache2.libelle = 'tache 2';
    store.taches.push(tache2);
}