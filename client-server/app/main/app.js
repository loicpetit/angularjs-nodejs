const express = require('express');
const path = require('path');

var app = express();

//  Paths
app.use(express.static(__dirname + '/public'));
app.use('/jquery', express.static(path.join(__dirname, '../../node_modules/jquery/dist')));
app.use('/bootstrap', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist')));
app.use('/angular', express.static(path.join(__dirname, '../../node_modules/angular')));
app.use('/angular', express.static(path.join(__dirname, '../../node_modules/angular-animate')));
app.use('/angular', express.static(path.join(__dirname, '../../node_modules/angular-resource')));
app.use('/angular-ui-router', express.static(path.join(__dirname, '../../node_modules/angular-ui-router/release')));
app.use('/angular-ui-bootstrap', express.static(path.join(__dirname, '../../node_modules/angular-ui-bootstrap/dist')));

module.exports = app;