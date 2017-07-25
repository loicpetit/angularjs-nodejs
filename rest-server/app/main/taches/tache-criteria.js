module.exports = class TacheCriteria {
    constructor(criteria) {
        this.id = null;
        this.libelle = null;
        if (criteria) {
            if (criteria.id !== undefined){
                this.id = criteria.id;
            }
            if (criteria.libelle !== undefined){
                this.libelle = criteria.libelle;
            }
        }
    }
};