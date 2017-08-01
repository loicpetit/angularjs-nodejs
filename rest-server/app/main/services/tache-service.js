const TacheCriteria = require('../dao/criteria/tache-criteria');

const parser = require('../util/parser');
const tacheProcessus = require('../processus/tache-processus');

exports.findAll = function(req, res){
    var criteria = new TacheCriteria({
        id: parser.toInt(req.query.id),
        libelle: req.query.libelle
    });
    var taches = tacheProcessus.findAll(criteria).map(function(tache){
        return {
            id: tache.id,
            libelle: tache.libelle
        };
    });
    res.json({
        taches: taches
    });
}

exports.find = function(req, res){
    var criteria = new TacheCriteria({
        id: parser.toInt(req.params.id)
    });
    var tache = tacheProcessus.find(criteria);
    res.json({
        tache: {
            id: tache.id,
            dateCreation: tache.dateCreation.toDate(),
            dateModification: tache.dateModification.toDate(),
            libelle: tache.libelle
        }
    });
}