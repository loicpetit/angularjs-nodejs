const parser = require('../../main/util/parser');

describe('Parser', function(){
    
    it('should parse to int', function(){
        //  given
        var stringValue = '10';
        var expectedValue = 10;
        //  when
        var intValue = parser.toInt(stringValue);
        //  then
        expect(stringValue).not.toBe(expectedValue);
        expect(intValue).toBe(expectedValue);
    });

    it('should return undefined if parse undefined', function(){
        //  when
        var intValue = parser.toInt(undefined);
        //  then
        expect(intValue).toBeUndefined();
    });

    it('should return undefined if parse null', function(){
        //  when
        var intValue = parser.toInt(null);
        //  then
        expect(intValue).toBeUndefined();
    });

});