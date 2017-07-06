const util = require('../../main/common/util');

describe('util', function () {

    var HI = 'Hi!';
    var HI_CHILD = 'Hi guys!';
    var BYE = 'Bye!';
    var FIRSTNAME = 'Chuck';
    var NAME = 'Norris';
    var Parent;

    beforeEach(function () {
        Parent = function (firstname) {
            this.firstname = firstname;
        }
        Parent.prototype.getFirstname = function () {
            return this.firstname;
        }
        Parent.prototype.setFirstname = function (firstname) {
            this.firstname = firstname;
        }
        Parent.prototype.sayHi = function () {
            return HI;
        }
    });

    it('should extends ', function () {
        // given
        Child = util.extends(
            Parent,
            function () {
            },
            {
                getName: function(){
                    return this.name;
                },
                setName: function(name){
                    this.name = name;
                },
                sayBye: function () {
                    return BYE;
                }
            }
        );
        //  when
        var child = new Child(FIRSTNAME, NAME);
        //  then
        expect(child.getFirstname()).toBeUndefined();
        expect(child.getName()).toBeUndefined();
        //  when
        child.setFirstname(FIRSTNAME);
        child.setName(NAME);
        //  then
        expect(child.getFirstname()).toEqual(FIRSTNAME);
        expect(child.getName()).toEqual(NAME);
        expect(child.sayHi()).toEqual(HI);
        expect(child.sayBye()).toEqual(BYE);
    });

    it('should extends with constructor inheritance', function () {
        //  given
        Child = util.extends(
            Parent,
            function (firstname, name) {
                this.super.call(this, firstname);
                this.name = name;
            },
            {
                sayBye: function () {
                    return BYE;
                }
            }
        );
        //  when
        var child = new Child(FIRSTNAME, NAME);
        //  then
        expect(child.firstname).toEqual(FIRSTNAME);
        expect(child.name).toEqual(NAME);
        expect(child.sayHi()).toEqual(HI);
        expect(child.sayBye()).toEqual(BYE);
    });

    it('should extends with method override', function () {
        //  given
        Child = util.extends(
            Parent,
            function (firstname, name) {
                this.super.call(this, firstname);
                this.name = name;
            },
            {
                sayHi: function () {
                    return HI_CHILD;
                },
                sayBye: function () {
                    return BYE;
                }
            }
        );
        //  when
        var child = new Child(FIRSTNAME, NAME);
        //  then
        expect(child.firstname).toEqual(FIRSTNAME);
        expect(child.name).toEqual(NAME);
        expect(child.sayHi()).toEqual(HI_CHILD);
        expect(child.sayBye()).toEqual(BYE);
    });

});