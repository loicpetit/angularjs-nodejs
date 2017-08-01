const Tache = require('../../main/modele/tache');

const moment = require('moment');
const store = require('../../main/dao/store');

describe('Tache service', function(){

    var tache1, tache2, tache3;

    beforeEach(function(){
        //  init server
        serverRestart();
        //  init store
        tache1 = new Tache();
        tache1.id = 1;
        tache1.dateCreation = moment({ year: 2016, month: 5, day: 1 });
        tache1.dateModification = null;
        tache1.libelle = 'tache commune 1';
        tache2 = new Tache();
        tache2.id = 2;
        tache2.dateCreation = moment({ year: 2016, month: 5, day: 3 });
        tache2.dateModification = null;
        tache2.libelle = 'tache commune 2';
        tache3 = new Tache();
        tache3.id = 3;
        tache3.dateCreation = moment({ year: 2016, month: 5, day: 5 });
        tache3.dateModification = moment({ year: 2016, month: 6, day: 6 });
        tache3.libelle = 'tache 3';
        store.taches.push(tache1);
        store.taches.push(tache2);
        store.taches.push(tache3);
    });

    it('should find all', function(done){
        serverGet('/taches', function(res, body){
            var taches = body.taches;
            expect(res.statusCode).toEqual(200);
            expect(taches.length).toEqual(3);
            expect(taches[0].id).toEqual(tache1.id);
            expect(taches[0].libelle).toEqual(tache1.libelle);
            expect(taches[1].id).toEqual(tache2.id);
            expect(taches[1].libelle).toEqual(tache2.libelle);
            expect(taches[2].id).toEqual(tache3.id);
            expect(taches[2].libelle).toEqual(tache3.libelle);
            done();
        })
    });

    it('should find all with libelle', function(done){
        var searchedLibelle = 'commune';
        serverGet('/taches?libelle='+searchedLibelle, function(res, body){
            var taches = body.taches;
            expect(res).toBeStatusOk();
            expect(taches.length).toEqual(2);
            expect(taches[0].libelle).toContainsString(searchedLibelle);
            expect(taches[1].libelle).toContainsString(searchedLibelle);
            done();
        });
    })

    it('should find', function(done){
        serverGet('/taches/'+tache3.id, function(res, body){
            var tache = body.tache;
            expect(res).toBeStatusOk();
            expect(tache.id).toEqual(tache3.id);
            expect(new Date(tache.dateCreation)).toEqual(tache3.dateCreation.toDate());
            expect(new Date(tache.dateModification)).toEqual(tache3.dateModification.toDate());
            expect(tache.libelle).toEqual(tache3.libelle);
            done();
        });
    });

    it('should create tache', function(done){
        var tacheToCreate = {
            libelle: 'tache to create'
        };
        serverPost('/taches', {tache: tacheToCreate}, function(res, body){
            var tacheCreated = body.tache;
            expect(res).toBeStatusOk();
            expect(tacheCreated.id).toBeDefined();
            expect(tacheCreated.id).not.toBeNull();
            expect(tacheCreated.dateCreation).toBeDefined();
            expect(tacheCreated.dateCreation).not.toBeNull();
            expect(tacheCreated.libelle).toEqual(tacheToCreate.libelle);
            expect(store.taches.length).toEqual(4);
            done();
        });
    });

    it('should update tache', function(done){
        var tacheToUpdate = {
            libelle: 'updated libelle'
        };
        serverPut('/taches/' + tache1.id, {tache: tacheToUpdate}, function(res, body){
            var tacheUpdated = body.tache;
            expect(res).toBeStatusOk();
            expect(tacheUpdated.id).toEqual(tache1.id);
            expect(tacheUpdated.dateModification).toBeDefined();
            expect(tacheUpdated.dateModification).not.toBeNull();
            expect(tacheUpdated.libelle).toEqual(tacheToUpdate.libelle);
            done();
        });
    });
});