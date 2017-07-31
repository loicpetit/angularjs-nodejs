const tacheProcessus = require('../processus/tache-processus');

exports.findAll = function(req, res){
    var taches = tacheProcessus.findAll().map(function(tache){
        return {
            id: tache.id,
            libelle: tache.libelle
        };
    });
    res.json({
        taches: taches
    })
}