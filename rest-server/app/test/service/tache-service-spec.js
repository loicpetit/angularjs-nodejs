const Tache = require('../../main/modele/tache');

const store = require('../../main/dao/store');

describe('Tache service', function(){

    var tache1, tache2;

    beforeEach(function(){
        //  init server
        serverRestart();
        //  init store
        tache1 = new Tache();
        tache1.id = 1;
        tache1.libelle = 'tache commune 1';
        tache2 = new Tache();
        tache2.id = 2;
        tache2.libelle = 'tache commune 2';
        tache3 = new Tache();
        tache3.id = 3;
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
            expect(res.statusCode).toEqual(200);
            expect(taches.length).toEqual(2);
            expect(taches[0].libelle).toContainsString(searchedLibelle);
            expect(taches[1].libelle).toContainsString(searchedLibelle);
            done();
        });
    })
});