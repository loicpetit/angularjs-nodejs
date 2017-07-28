const Entite = require('./entite');

module.exports = class Tache extends Entite {
    constructor() {
        super();
        this._libelle = null;
    }
    get libelle() { return this._libelle; }
    set libelle(value) { this._libelle = value; }

    cloneTo(tache) {
        super.cloneTo(tache);
        tache.libelle = this.libelle;
    }

    clone() {
        var clone = new Tache();
        this.cloneTo(clone);
        return clone;
    }
};;
