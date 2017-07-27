const entiteProcessus = require('../common/entite-processus');
const tacheDao = require('./tache-dao');

exports.save = function(tache){
    entiteProcessus.updateMetadata(tache);
    return tacheDao.save(tache);
}

exports.delete = function(tacheId){
    tacheDao.delete(tacheId);
}

exports.find = function(criteria){
    return tacheDao.find(criteria);
}

exports.findAll = function(criteria){
    return tacheDao.findAll(criteria);
}