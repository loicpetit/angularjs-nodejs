exports.toInt = function(stringValue){
    var intValue = parseInt(stringValue, 10);
    if(isNaN(intValue)){
        return;
    }
    return intValue;
}