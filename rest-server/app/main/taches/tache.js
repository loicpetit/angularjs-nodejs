const util = require('../common/util');
const Entite = require('../common/entite');

module.exports = util.extends(
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
        }
    }
);
