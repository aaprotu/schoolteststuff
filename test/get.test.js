import { assert } from 'chai';
import get from '../src/get.js';

describe("get.js", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }

    it("Should return 'undefined'", () => {
        assert.isUndefined(get(null));
    })
    it("Should return 'default", () => {
        assert.equal(get(object, null, 'default'), 'default');
    })
    it("Should return 3", () => {
        assert.equal(get(object, 'a[0].b.c'), 3);
    })
    it("Should return 3", () => {
        assert.equal(get(object, ['a', '0', 'b', 'c']), 3);
    })

});