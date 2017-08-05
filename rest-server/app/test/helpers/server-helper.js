(function (global) {
    const http = require('http');
    const request = require('request');

    const app = require('../../main/app');
    const store = require('../../main/dao/store');

    const port = 500;
    const baseUrl = 'http://localhost:' + port;

    var server = null;

    global.serverRestart = function () {
        if (server !== null) {
            server.close();
            server = null;
            console.log('Server closed');
        }
        store.clear();
        server = http.createServer(app).listen(port, function () {
            console.log('Server listening on port ' + port);
        });
    }

    // servicePath: the path after the baseUrl (ex: http://localhost:500/taches/2 , baseUrl = 'http://localhost:500', servicePath = '/taches/2')
    // callback : function(response, body)
    global.serverGet = function (servicePath, callback) {
        request.get({
            url: baseUrl + servicePath,
            json: true
        }, function (error, response, body) {
            manageServerResponse(error, response, body, callback);
        });
    }


    // servicePath: the path after the baseUrl (ex: http://localhost:500/taches/2 , baseUrl = 'http://localhost:500', servicePath = '/taches/2')
    // jsonObject is the object to send to the server, it will be parsed in json
    // callback : function(response, body)
    global.serverPost = function (servicePath, jsonObject, callback) {
        request.post({
            url: baseUrl + servicePath,
            body: jsonObject,
            json: true
        }, function (error, response, body) {
            manageServerResponse(error, response, body, callback);
        })
    }

    // servicePath: the path after the baseUrl (ex: http://localhost:500/taches/2 , baseUrl = 'http://localhost:500', servicePath = '/taches/2')
    // jsonObject is the object to send to the server, it will be parsed in json
    // callback : function(response, body)
    global.serverPut = function (servicePath, jsonObject, callback) {
        request.put({
            url: baseUrl + servicePath,
            body: jsonObject,
            json: true
        }, function (error, response, body) {
            manageServerResponse(error, response, body, callback);
        })
    }

    // servicePath: the path after the baseUrl (ex: http://localhost:500/taches/2 , baseUrl = 'http://localhost:500', servicePath = '/taches/2')
    // callback : function(response, body)
    global.serverDelete = function (servicePath, callback) {
        request.delete({
            url: baseUrl + servicePath,
            json: true
        }, function (error, response, body) {
            manageServerResponse(error, response, body, callback);
        })
    }

    function manageServerResponse(error, response, body, callback) {
        if (error) {
            throw new Error(error);
        } if (response.statusCode === 500) {
            var serverError = body.error;
            throw new Error(serverError.message);
        } else {
            callback(response, body);
        }
    }

})(global);