module.exports = class Entite {
    constructor() {
        this._id = null;
        this._dateCreation = null;
        this._dateModification = null;
    }
    get id() { return this._id; }
    set id(value) { this._id = value; }
    get dateCreation() { return this._dateCreation; }
    set dateCreation(value) { this._dateCreation = value; }
    get dateModification() { return this._dateModification; }
    set dateModification(value) { this._dateModification = value; }
 
    cloneTo(entite) {
        entite.id = this.id;
        entite.dateCreation = this.dateCreation;
        entite.dateModification = this.dateModification;
    }
};
