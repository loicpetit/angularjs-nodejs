const moment = require('moment');
const Tache = require('../../main/taches/tache');

describe('Tache', function () {

    var id, dateCreation, dateModification, libelle;
    var tache;

    beforeEach(function(){
        id = 1;
        dateCreation = moment({ year: 2016, month: 6, day: 5 });
        dateModification = moment({ year: 2017, month: 7, day: 6 });
        libelle = "mon libelle";
        tache = new Tache();
        tache.setId(id);
        tache.setDateCreation(dateCreation);
        tache.setDateModification(dateModification);
        tache.setLibelle(libelle);
    });

    it('should set properties', function () {
        expect(tache.getId()).toEqual(id);
        expect(tache.getDateCreation()).toEqual(dateCreation);
        expect(tache.getDateModification()).toEqual(dateModification);
        expect(tache.getLibelle()).toEqual(libelle);
    });

    it('should clone', function(){
        var cloneId = 2;
        var clone = tache.clone();
        expect(clone.getId()).toEqual(tache.getId());
        expect(clone.getDateCreation()).toEqual(tache.getDateCreation());
        expect(clone.getDateModification()).toEqual(tache.getDateModification());
        expect(clone.getLibelle()).toEqual(tache.getLibelle());
        expect(cloneId).not.toEqual(id);
        clone.setId(cloneId);
        expect(clone.getId()).toEqual(cloneId);
        expect(tache.getId()).toEqual(id);
    });
});