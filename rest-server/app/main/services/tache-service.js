const Tache = require('../modele/tache');
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
};

exports.find = function(req, res){
    var criteria = new TacheCriteria({
        id: parser.toInt(req.params.id)
    });
    var tache = tacheProcessus.find(criteria);
    res.json({
        tache: {
            id: tache.id,
            dateCreation: tache.dateCreation.toDate(),
            dateModification: tache.dateModification ? tache.dateModification.toDate() : null,
            libelle: tache.libelle
        }
    });
};

exports.create = function(req, res){
    //  parse body
    var jsonTache = req.body.tache;
    var tache = new Tache();
    tache.libelle = jsonTache.libelle;
    //  create
    var tacheCreated = tacheProcessus.save(tache);
    //  respond
    res.json({
        tache: {
            id: tache.id,
            dateCreation: tache.dateCreation.toDate(),
            libelle: tache.libelle
        }
    });
};


exports.update = function(req, res){
    res.json({
        tache: {
            
        }
    });
};

exports.delete = function(req, res){
    res.statusCode = 204;
    res.send();
};
