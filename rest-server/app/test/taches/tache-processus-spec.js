const Tache = require('../../main/taches/tache');
const tacheProcessus = require('../../main/taches/tache-processus');

describe('Tache processus', function(){

    var tache;

    beforeEach(function(){
        tache = new Tache();
        tache.libelle = "test"; 
    });

    it('should set date creation when saving new tache', function(){
        //  when
        tacheProcessus.save(tache);
        //  then
        expect(tache.dateCreation).not.toBeNull();
        expect(tache.dateModification).toBeNull();
    }); 

    it('should set date modification when updating tache', function(){
        //  given
        tache.id = 1;
        //  when
        tacheProcessus.save(tache);
        //  then
        expect(tache.dateCreation).toBeNull();
        expect(tache.dateModification).not.toBeNull();
    });

});