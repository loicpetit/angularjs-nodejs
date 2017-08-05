const bodyParser = require('body-parser');
const express = require('express');

const Tache = require('./modele/tache');

const tacheService = require('./services/tache-service');

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

module.exports = app;
