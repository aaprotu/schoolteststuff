import { assert } from 'chai';
import add from '../src/add.js';

describe("add.js", () => {
    it("Should return correct sum", () => {
        assert.equal(add(2, 2), 4);
    });
    it("Should return negative number", () => {
        assert.equal(add(-1, -1), -2);
    })
    it("Should return zero", () => {
        assert.equal(add(-1, 1), 0);
    })

});