app.factory('TacheService', ['$q', function ($q) {

    var factory = {};

    var taches = [
        {
            id: 1,
            dateCreation: new Date(2017, 8, 8),
            dateModification: new Date(2017, 9, 9),
            libelle: 'tache 1'
        },
        {
            id: 2,
            dateCreation: new Date(2017, 10, 10),
            dateModification: null,
            libelle: 'tache 2'
        }
    ];

    var sequence = 2;

    function getNextId(){
        sequence++;
        return sequence;
    }

    factory.findAll = function () {
        var deferred = $q.defer();
        deferred.resolve(angular.copy(taches));
        return deferred.promise;
    }

    /**
     * Vérifie si une tache est valide. 
     * @return true si valide, sinon false
     */
    factory.validate = function (tache) {
        if (angular.isUndefined(tache) || tache === null) {
            return false;
        }
        if (angular.isUndefined(tache.libelle) || tache.libelle === null || tache.libelle.trim() === '') {
            return false;
        }
        return true;
    }

    /**
     * Vérifie si une tache est valide. Envoie une exception si la tache n'est pas valide.
     */
    factory.check = function (tache) {
        if (!factory.validate(tache)) {
            throw 'Tache non valide';
        }
    }

    factory.create = function (tache) {
        var deferred = $q.defer();
        factory.check(tache);
        tache.id = getNextId();
        tache.dateCreation = new Date();
        var tacheToCreate = angular.copy(tache);
        taches.push(tacheToCreate);
        deferred.resolve(tache);
        return deferred.promise;
    }

    factory.update = function (tache) {
        var deferred = $q.defer();
        factory.check(tache);
        var tacheFound = false;
        for (var i in taches) {
            var tacheToUpdate = taches[i];
            if (tacheToUpdate.id === tache.id) {
                tacheToUpdate.libelle = tache.libelle;
                tacheToUpdate.dateModification = new Date();
                tacheFound = true;
                deferred.resolve(angular.copy(tacheToUpdate));
                break;
            }
        }
        if (!tacheFound) {
            deferred.reject('Tache non trouvée');
        }
        return deferred.promise;
    }

    factory.delete = function (tacheId) {
        var deferred = $q.defer();
        var indexToDelete = null;
        for (var i in taches) {
            var tache = taches[i];
            if (tache.id === tacheId) {
                indexToDelete = i;
                break;
            }
        }
        if (indexToDelete !== null) {
            taches.splice(indexToDelete, 1);
            deferred.resolve();
        }else{
            deferred.reject('Tache non trouvée');
        }
        return deferred.promise;
    }

    return factory;

}]);