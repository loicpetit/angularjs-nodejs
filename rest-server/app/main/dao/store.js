class Store {
    constructor() {
        this.clear();
    }
    clear() {
        this._taches = [];
    }
    get taches() { return this._taches; }
    set taches(value) { this._taches = value; }
}

module.exports = new Store();