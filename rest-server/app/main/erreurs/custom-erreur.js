module.exports = class extends Error {
    constructor(code, msg){
        super(msg);
        this.code = code;
    }
}