module.exports = class EntiteCriteria {
    constructor(criteria) {
        this.id = null;
        if (criteria) {
            if (criteria.id !== undefined){
                this.id = criteria.id;
            }
        }
    }
};