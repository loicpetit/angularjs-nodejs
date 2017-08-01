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
    var tacheId = parser.toInt(req.params.id);
    var criteria = new TacheCriteria({
        id: tacheId
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
    //  create
    var jsonTache = req.body.tache;
    var tache = new Tache();
    tache.libelle = jsonTache.libelle;
    var tacheCreated = tacheProcessus.save(tache);
    //  respond
    res.json({
        tache: {
            id: tacheCreated.id,
            dateCreation: tacheCreated.dateCreation.toDate(),
            libelle: tacheCreated.libelle
        }
    });
};


exports.update = function(req, res){
    //  update tache
    var jsonTache = req.body.tache;
    var tacheId = parser.toInt(req.params.id);
    var tache = tacheProcessus.find({id: tacheId});
    tache.libelle = jsonTache.libelle;
    var tacheUpdated = tacheProcessus.save(tache);
    //  respond
    res.json({
        tache: {
            id: tacheUpdated.id,
            dateCreation: tacheUpdated.dateCreation.toDate(),
            dateModification: tacheUpdated.dateModification.toDate(),
            libelle: tacheUpdated.libelle            
        }
    });
};

exports.delete = function(req, res){
    //  delete tache
    var tacheId = parser.toInt(req.params.id);
    tacheProcessus.delete(tacheId);
    //  respond
    res.statusCode = 204;
    res.send();
};
