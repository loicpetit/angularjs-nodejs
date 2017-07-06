function Entite() {
    this._id = null;
    this._dateCreation = null;
    this._dateModification = null;
}
Entite.prototype.getId = function() { return this._id; }
Entite.prototype.setId = function(id) { this._id = id; }
Entite.prototype.getDateCreation = function() { return this._dateCreation; }
Entite.prototype.setDateCreation = function(dateCreation) { this._dateCreation = dateCreation; }
Entite.prototype.getDateModification = function() { return this._dateModification; }
Entite.prototype.setDateModification = function(dateModification) { this._dateModification = dateModification; }

module.exports = Entite;
