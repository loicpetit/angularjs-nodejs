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
        tache1.libelle = 'tache 1';
        tache2 = new Tache();
        tache2.id = 2;
        tache2.libelle = 'tache 2';
        store.taches.push(tache1);
        store.taches.push(tache2);
    });

    it('should find all', function(done){
        serverGet('/taches', function(res, body){
            var taches = body.taches;
            expect(taches.length).toEqual(2);
            expect(taches[0].id).toEqual(tache1.id);
            expect(taches[0].libelle).toEqual(tache1.libelle);
            expect(taches[1].id).toEqual(tache2.id);
            expect(taches[1].libelle).toEqual(tache2.libelle);
            done();
        })
    });
});