beforeEach(function () {

    function toContainsString(util, customEqualityTesters) {
        return {
            compare: function (actual, expected) {
                //  result
                var result = {
                    pass: actual.indexOf(expected) !== -1
                };
                //  error messages
                if (result.pass) {
                    result.message = 'Expected [' + actual + '] not to contain [' + expected + ']';
                } else {
                    result.message = 'Expected [' + actual + '] to contain [' + expected + ']';
                }
                
                return result
            }
        }
    }

    jasmine.addMatchers({
        toContainsString: toContainsString
    });

});