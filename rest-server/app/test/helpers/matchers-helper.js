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
                    result.message = 'Expected status [' + actual.statusCode + '] not to be OK [200]';
                } else {
                    result.message = 'Expected status [' + actual.statusCode + '] to be OK [200]';
                }
                
                return result
            }
        }
    }

    function toBeStatusNoContent(util, customEqualityTesters) {
        return {
            compare: function (actual, expected) {
                //  result
                var result = {
                    pass: actual.statusCode === 204
                };
                //  error messages
                if (result.pass) {
                    result.message = 'Expected status [' + actual.statusCode + '] not to be NO_CONTENT [204]';
                } else {
                    result.message = 'Expected status [' + actual.statusCode + '] to be NO_CONTENT [204]';
                }
                
                return result
            }
        }
    }

    jasmine.addMatchers({
        toContainsString: toContainsString,
        toBeStatusOk: toBeStatusOk,
        toBeStatusNoContent: toBeStatusNoContent
    });

});