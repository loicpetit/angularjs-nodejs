const moment = require('moment');
const Entite = require('../../main/common/entite');

describe('Entite', function () {
    it('should set properties', function () {
        //  given
        var id = 1;
        var dateCreation = moment({ year: 2016, month: 6, day: 5 });
        var dateModification = moment({ year: 2017, month: 7, day: 6 });
        //  when
        var e = new Entite();
        e.setId(id);
        e.setDateCreation(dateCreation);
        e.setDateModification(dateModification);
        //  then
        expect(e.getId()).toEqual(id);
        expect(e.getDateCreation()).toEqual(dateCreation);
        expect(e.getDateModification()).toEqual(dateModification);
    });
});