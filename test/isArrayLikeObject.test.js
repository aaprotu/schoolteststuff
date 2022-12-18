import { assert } from 'chai';
import  isArrayLikeObject  from '../src/isArrayLikeObject.js';
import { JSDOM } from 'jsdom';
const { document } = (new JSDOM()).window;

describe("isArrayLikeObject", () => {
    it("should return true for an array-like object", () => {
        const arrayLikeObject = { '0': 'a', '1': 'b', '2': 'c', length: 3 };
        assert.isTrue(isArrayLikeObject(arrayLikeObject));
    });
    it("should return true for an array", () => {
        assert.isTrue(isArrayLikeObject([1, 2, 3]));
    });
    it("should return true for an HTMLCollection object", () => {
        assert.isTrue(isArrayLikeObject(document.body.children));
    });
    it("should return false for a string", () => {
        assert.isFalse(isArrayLikeObject('abc'));
    });
    it("should return false for a function", () => {
        assert.isFalse(isArrayLikeObject(() => {}));
    });
    it("should return false for a non-object value", () => {
        assert.isFalse(isArrayLikeObject(null));
        assert.isFalse(isArrayLikeObject(undefined));
        assert.isFalse(isArrayLikeObject(123));
        assert.isFalse(isArrayLikeObject(true));
    });
    it("should return false for an object with a 'length' property that is a float", () => {
        const object = { length: 3.14 };
        assert.isFalse(object);
    });
});