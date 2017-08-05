const express = require('express');
const clientApp = require('./client-server/app/main/app');
const restApp = require('./rest-server/app/main/app');

var app = express();

app.use("/rest", restApp);
app.use("/", clientApp);

module.exports = app;