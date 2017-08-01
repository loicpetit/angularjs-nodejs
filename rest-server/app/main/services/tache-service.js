const TacheCriteria = require('../dao/criteria/tache-criteria');

const tacheProcessus = require('../processus/tache-processus');

exports.findAll = function(req, res){
    var criteria = new TacheCriteria(req.query);
    var taches = tacheProcessus.findAll(criteria).map(function(tache){
        return {
            id: tache.id,
            libelle: tache.libelle
        };
    });
    res.json({
        taches: taches
    })
}

exports.find = function(req, res){
    var tache = tacheProcessus.find()
}