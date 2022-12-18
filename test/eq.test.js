import { assert } from 'chai';
import  eq  from '../src/eq.js';

describe("eq", () => {
    it("should return true when comparing NaNs", () => {
        assert.isTrue(eq(NaN, NaN));
    });
    it("should return true when comparing equal values", () => {
        assert.isTrue(eq(1, 1));
    });
    it("should return false when comparing different values", () => {
        assert.isFalse(eq(2, 3));
    });
    it("should return true when comparing +0 and -0", () => {
        assert.isTrue(eq(+0, -0));
    });
    it("should return true when comparing equal strings", () => {
        assert.isTrue(eq("test string", "test string"));
    });
    it("should return false when comparing a primitive string to an Object", () => {
        assert.isFalse(eq("a", Object("a")));
    });
    it("should return false when comparing a primitive string to a primitive number", () => {
        assert.isFalse(eq("3", 3));
    });
    it("should return false when comparing different objects with equal values", () => {
        const obj1 = 3;
        const obj2 = 3;
        assert.isFalse(eq(obj1, obj2));
    });

});