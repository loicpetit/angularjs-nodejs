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
        entite.id = id;
        entite.dateCreation = dateCreation;
        entite.dateModification  = dateModification;

    });

    it('should set properties', function () {
        expect(entite.id).toEqual(id);
        expect(entite.dateCreation).toEqual(dateCreation);
        expect(entite.dateModification).toEqual(dateModification);
    });

    it('should clone to another entity', function () {
        var cloneId = 2;
        var cloneDateCreation = moment({ year: 2017, month: 6, day: 5 });
        var cloneDateModification = moment({ year: 2018, month: 6, day: 5 });
        var clone = new Entite();
        entite.cloneTo(clone);
        expect(clone.id).toEqual(entite.id);
        expect(clone.dateCreation).toEqual(entite.dateCreation);
        expect(clone.dateModification).toEqual(entite.dateModification);
        expect(cloneId).not.toEqual(id);
        expect(cloneDateCreation).not.toEqual(dateCreation);
        expect(cloneDateModification).not.toEqual(dateModification);
        clone.id = cloneId;
        clone.dateCreation = cloneDateCreation;
        clone.dateModification = cloneDateModification;
        expect(clone.id).toEqual(cloneId);
        expect(clone.dateCreation).toEqual(cloneDateCreation);
        expect(clone.dateModification).toEqual(cloneDateModification);
        expect(entite.id).toEqual(id);
        expect(entite.dateCreation).toEqual(dateCreation);
        expect(entite.dateModification).toEqual(dateModification);
    });
});