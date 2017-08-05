const http = require('http');
const moment = require('moment');

const Tache = require('./rest-server/app/main/modele/tache');

const app = require('./app');
const store = require('./rest-server/app/main/dao/store');


console.log('AngularJS NodeJS');
var port = process.env.PORT || 8083;
http.createServer(app).listen(port, function () {
    console.log('Server listening on port ' + port);
    setupStore();
});

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