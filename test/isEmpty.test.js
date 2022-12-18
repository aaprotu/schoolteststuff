import { assert } from 'chai';
import  isEmpty  from '../src/isEmpty.js';

/* isEmpty(null)
* // => true
*
* isEmpty(true)
* // => true
*
* isEmpty(1)
* // => true
*
* isEmpty([1, 2, 3])
* // => false
*
* isEmpty('abc')
* // => false
*
* isEmpty({ 'a': 1 })
* // => false
*/

describe("isEmpty", () => {

    it("should return true when null is used", () => {
        assert.isTrue(isEmpty(null));
    });
    it("should return true when boolean is used", () => {
        assert.isTrue(isEmpty(true));
    });
    it("should return true when single value is used", () => {
        assert.isTrue(isEmpty(1));
    });
    it("should return false when non-empty array is used", () => {
        assert.isFalse(isEmpty([1,2,3]));
    });
    it("should return false when a string with length of more than 0 is used", () => {
        assert.isFalse(isEmpty("abcd"));
    });
    it("should return false when a non-empty map is used", () => {
        assert.isFalse(isEmpty({ 'a': 1 }));
    });
    it("should return false when a non-empty set is used", () => {
        const mySet1 = new Set();
        mySet1.add(1);
        mySet1.add('a');
        assert.isFalse(isEmpty(mySet1));
    });


});