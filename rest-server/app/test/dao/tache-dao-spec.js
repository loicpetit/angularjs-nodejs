const TACHE_ERREURS = require('../../main/erreurs/tache-erreurs');

const Tache = require('../../main/modele/tache');
const TacheCriteria = require('../../main/dao/criteria/tache-criteria');

const moment = require('moment');
const store = require('../../main/dao/store');
const tacheDao = require('../../main/dao/tache-dao');

describe('Tache dao', function () {

    var tache1, tache2, tache3;

    beforeEach(function () {
        //  init internal taches for test
        tache1 = new Tache();
        tache1.id = 1;
        tache1.dateCreation = moment({ year: 2016, month: 1, day: 1 });
        tache1.dateModification = moment({ year: 2016, month: 2, day: 2 });
        tache1.libelle = 'tache 1 commune';
        tache2 = new Tache();
        tache2.id = 2;
        tache2.dateCreation = moment({ year: 2016, month: 3, day: 3 });
        tache2.dateModification = moment({ year: 2016, month: 4, day: 4 });
        tache2.libelle = 'tache 2';
        tache3 = new Tache();
        tache3.id = 4;
        tache3.dateCreation = moment({ year: 2016, month: 5, day: 5 });
        tache3.dateModification = moment({ year: 2016, month: 6, day: 6 });
        tache3.libelle = 'tache 3 commune';
        store.taches = [tache1, tache2, tache3];
    });
    
    it('should find tache by id', function () {
        //  given
        var criteria = new TacheCriteria({id: tache1.id});
        //  when
        var tache = tacheDao.find(criteria);
        //  then
        expect(tache).toEqual(tache1);
        expect(tache).not.toBe(tache1);
    });

    it('should raise an error if tache not found', function () {
        //  given
        var criteria = new TacheCriteria({id: -1});
        //  when
        var find = function () {
            tacheDao.find(criteria);
        };
        //  then
        expect(find).toThrow(TACHE_ERREURS.T1);
    });

    it('should raise an error if several results when find', function () {
        //  given
        var criteria = new TacheCriteria({libelle: '  tache commune   '});
        //  when
        var find = function () {
            tacheDao.find(criteria);
        };
        //  then
        expect(find).toThrow(TACHE_ERREURS.T2);
    });
    
    it('should find all', function () {
        //  when
        var taches = tacheDao.findAll();
        //  then
        expect(taches.length).toEqual(3);
        expect(taches[0]).toEqual(tache1);
        expect(taches[0]).not.toBe(tache1);
        expect(taches[1]).toEqual(tache2);
        expect(taches[1]).not.toBe(tache2);
        expect(taches[2]).toEqual(tache3);
        expect(taches[2]).not.toBe(tache3);
    });

    it('should find all by libelle', function () {
        //  given
        var criteria = new TacheCriteria({libelle: '  tache commune   '});
        //  when
        var taches = tacheDao.findAll(criteria);
        //  then
        expect(taches.length).toEqual(2);
        expect(taches[0]).toEqual(tache1);
        expect(taches[1]).toEqual(tache3);
    });

    it('should save a new tache', function () {
        //  given
        var tacheToSave = tache1.clone();
        tacheToSave.id = null;
        tacheToSave.libelle = "tache 4";
        //  when
        var tacheSaved = tacheDao.save(tacheToSave);
        //  then
        expect(store.taches.length).toEqual(4);
        expect(tacheSaved.id).toEqual(tache3.id + 1);
        expect(tacheSaved).toBe(tacheToSave);
    });

    it('should update an existing tache', function () {
        //  given
        var tacheToUpdate = tache1.clone();
        tacheToUpdate.libelle = 'new libelle';
        //  when
        var tacheUpdated = tacheDao.save(tacheToUpdate);
        var tacheFound = tacheDao.find(new TacheCriteria({id: tacheToUpdate.id}));
        //  then
        expect(store.taches.length).toEqual(3);
        expect(tacheFound.libelle).toEqual(tacheToUpdate.libelle);
        expect(tacheUpdated).toBe(tacheToUpdate);
    });

    it('should raise an error if tache to update not found', function () {
        //  given
        var tacheToUpdate = tache1.clone();
        tacheToUpdate.id = -1;
        //  when
        var save = function () {
            tacheDao.save(tacheToUpdate);
        };
        //  then
        expect(save).toThrow(TACHE_ERREURS.T1);

    });

    it('should not update tache if edited tache is not save', function () {
        //  given
        var criteria = new TacheCriteria({id: tache1.id});
        var originalLibelle = tache1.libelle;
        //  when
        var tacheToEdit = tacheDao.find(criteria);
        tacheToEdit.libelle = 'new libelle';
        var originalTache = tacheDao.find(criteria);
        //  then
        expect(originalLibelle).not.toEqual(tacheToEdit.libelle);
        expect(originalTache.libelle).toEqual(originalLibelle);
    });

    it('should delete tache', function () {
        //  given
        var id = tache1.id;
        //  when
        tacheDao.delete(id);
        //  then
        expect(store.taches.length).toEqual(2);
        for(var tache of store.taches){
            expect(tache.id).not.toEqual(id);
        }
    });

    it('should raise an error if tache to delete not find', function () {
        //  when
        var save = function () {
            tacheDao.delete(-1);
        };
        //  then
        expect(save).toThrow(TACHE_ERREURS.T1);
    });

});