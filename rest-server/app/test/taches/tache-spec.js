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
        tache.id = id;
        tache.dateCreation = dateCreation;
        tache.dateModification = dateModification;
        tache.libelle  = libelle;
    });

    it('should set properties', function () {
        expect(tache.id).toEqual(id);
        expect(tache.dateCreation).toEqual(dateCreation);
        expect(tache.dateModification).toEqual(dateModification);
        expect(tache.libelle).toEqual(libelle);
    });

    it('should clone', function(){
        var cloneId = 2;
        var cloneLibelle = "clone";
        var clone = tache.clone();
        expect(clone.id).toEqual(tache.id);
        expect(clone.dateCreation).toEqual(tache.dateCreation);
        expect(clone.dateModification).toEqual(tache.dateModification);
        expect(clone.libelle).toEqual(tache.libelle);
        expect(cloneId).not.toEqual(id);
        expect(cloneLibelle).not.toEqual(libelle);
        clone.id = cloneId;
        clone.libelle = cloneLibelle;
        expect(clone.id).toEqual(cloneId);
        expect(clone.libelle).toEqual(cloneLibelle);
        expect(tache.id).toEqual(id);
        expect(tache.libelle).toEqual(libelle);
    });
});