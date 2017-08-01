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

    function toBeStatusOk(util, customEqualityTesters) {
        return {
            compare: function (actual, expected) {
                //  result
                var result = {
                    pass: actual.statusCode === 200
                };
                //  error messages
                if (result.pass) {
                    result.message = 'Expected ' + actual.statusCode + ' not to equal 200';
                } else {
                    result.message = 'Expected ' + actual.statusCode + ' to equal 200';
                }
                
                return result
            }
        }
    }

    jasmine.addMatchers({
        toContainsString: toContainsString,
        toBeStatusOk: toBeStatusOk
    });

});