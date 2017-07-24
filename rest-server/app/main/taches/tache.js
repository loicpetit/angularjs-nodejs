const util = require('../common/util');
const Entite = require('../common/entite');

var Tache = util.extends(
    Entite,
    function () {
        this._libelle = null;
    },
    {
        getLibelle: function () {
            return this._libelle;
        },
        setLibelle: function(libelle){
            this._libelle = libelle;
        },
        cloneTo: function(tache){
            this.super.prototype.cloneTo.call(this, tache);
            tache.setLibelle(this.getLibelle());
        },
        clone: function(){
            var clone = new Tache();
            this.cloneTo(clone);
            return clone;
        }
    }
);

module.exports = Tache;
