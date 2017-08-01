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

});