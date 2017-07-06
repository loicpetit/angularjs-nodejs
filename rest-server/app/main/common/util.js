exports.extends = function (parent, constructor, methods) {
    var child = constructor;
    child.prototype = new parent();
    child.prototype.super = parent;
    child.prototype.constructor = child;
    for(var fctName in methods){
        child.prototype[fctName] = methods[fctName];
    }
    return child;
};