const EntiteCriteria = require('./entite-criteria');

module.exports = class TacheCriteria extends EntiteCriteria {
    constructor(criteria) {
        super(criteria);
        this.libelle = null;
        if (criteria) {
            if (criteria.libelle !== undefined){
                this.libelle = criteria.libelle;
            }
        }
    }
};