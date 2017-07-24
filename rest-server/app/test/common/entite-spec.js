const moment = require('moment');
const Entite = require('../../main/common/entite');

describe('Entite', function () {
    var id, dateCreation, dateModification;
    var entite;

    beforeEach(function () {
        id = 1;
        dateCreation = moment({ year: 2016, month: 6, day: 5 });
        dateModification = moment({ year: 2017, month: 7, day: 6 });
        entite = new Entite();
        entite.setId(id);
        entite.setDateCreation(dateCreation);
        entite.setDateModification(dateModification);
        
    });

    it('should set properties', function () {
        expect(entite.getId()).toEqual(id);
        expect(entite.getDateCreation()).toEqual(dateCreation);
        expect(entite.getDateModification()).toEqual(dateModification);
    });

    it('should clone to another entity', function(){
        var cloneId = 2;
        var clone = new Entite();
        entite.cloneTo(clone);
        expect(clone.getId()).toEqual(entite.getId());
        expect(clone.getDateCreation()).toEqual(entite.getDateCreation());
        expect(clone.getDateModification()).toEqual(entite.getDateModification());
        expect(cloneId).not.toEqual(id);
        clone.setId(cloneId);
        expect(clone.getId()).toEqual(cloneId);
        expect(entite.getId()).toEqual(id);
    });
});