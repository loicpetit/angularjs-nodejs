const Entite = require('../../main/modele/entite');

const moment = require('moment');
const entiteProcessus = require('../../main/processus/entite-processus');

describe('Entite', function () {
    var entite;
    var now;

    beforeEach(function () {
        //  creer une entite
        entite = new Entite();
        //  mock la date courante
        now = moment({ year: 2015, month: 5, day: 5 });
        jasmine.clock().install();
        jasmine.clock().mockDate(now.toDate());
    });

    afterEach(function(){
        jasmine.clock().uninstall();
    });

    it('should update creation date', function(){
        //  when
        entiteProcessus.updateMetadata(entite)
        //  then
        expect(entite.dateCreation.valueOf()).toEqual(now.valueOf());
        expect(entite.dateModification).toBeNull();
    });

    it('should update modification date', function(){
        //  given
        var before = now.clone().subtract(1, 'months');
        entite.id = 1;
        entite.dateCreation = before;
        //  when
        entiteProcessus.updateMetadata(entite)
        //  then
        expect(entite.dateCreation).toBe(before);
        expect(entite.dateModification.valueOf()).toEqual(now.valueOf());
    });
});