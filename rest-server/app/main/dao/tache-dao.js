const ERREURS = require('../erreurs/tache-erreurs');

var store = require('./store');

exports.save = function (tache) {
    if (tache.id === null) {
        tache.id = computeId();
    } else {
        exports.delete(tache.id);
    }
    store.taches.push(tache);
    return tache;
}

exports.delete = function (tacheId) {
    var tacheIndex = null;
    for(var i in store.taches){
        var tache = store.taches[i];
        if(tache.id === tacheId){
            tacheIndex = i;
            break;
        }
    }
    if(tacheIndex === null){
        throw ERREURS.T1;
    }
    var tache = store.taches.splice(tacheIndex, 1)[0];
    delete tache;
}

exports.find = function (criteria) {
    var taches = exports.findAll(criteria);
    if (taches.length == 0) {
        throw ERREURS.T1;
    } else if (taches.length > 1) {
        throw ERREURS.T2;
    }
    return taches[0];
}

exports.findAll = function (criteria) {
    var taches = store.taches.filter(function (tache) {
        if (criteria) {
            return matchCriteria(tache, criteria);
        }
        return true;
    }).map(function (tache) {
        return tache.clone();
    });
    return sort(taches, criteria);
}

function matchCriteria(tache, criteria) {
    if (criteria.id !== null) {
        if (criteria.id !== tache.id) {
            return false;
        }
    }
    if (criteria.libelle) {
        //  on split le libelle pour avoir tous les mots et vérifier que chaque mot est présent
        //  si un mot n'est pas présent on ne match pas
        var words = criteria.libelle.trim().split(/\s+/);
        for (var word of words) {
            if (tache.libelle.indexOf(word) === -1) {
                return false;
            }
        }
    }
    return true;
}

function sort(taches, criteria) {
    return taches.sort(compareById);
}

function compareById(tache1, tache2) {
    return tache1.id - tache2.id;
}

function computeId() {
    var maxId = 0;
    for (var tache of store.taches) {
        if (maxId < tache.id) {
            maxId = tache.id;
        }
    }
    return maxId + 1;
}