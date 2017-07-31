(function (global) {
    const request = require('request');

    const server = require('../../main/server');

    const port = 500;
    const baseUrl = 'http://localhost:' + port;

    global.serverRestart = function () {
        server.stop();
        server.start(port);
    }

    // servicePath: the path after the baseUrl (ex: http://localhost:500/taches/2 , baseUrl = 'http://localhost:500', servicePath = '/taches/2')
    // callback : function(response, body)
    global.serverGet = function (servicePath, callback) {
        request.get(baseUrl +  servicePath, function(error, response, body){
            if(error){
                throw new Error(error);
            }else{
                var parsedBody = JSON.parse(body);
                callback(response, parsedBody);
            }
        });
    }
})(global);