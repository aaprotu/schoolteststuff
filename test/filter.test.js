import { assert } from 'chai';
import filter from '../src/filter.js';

describe("filter.js", () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
    ]
    const users2 = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': true }
    ]
    const nullArray = null;

    it("Should return an array", () => {
        assert.isArray(filter(users, ({ active }) => active));
    })
    it("Should return empty array", () => {
        assert.isArray(filter(nullArray), [[]]);
    })
    it("Should return an array with length of 1", () => {
        assert.lengthOf(filter(users, ({ active }) => active), 1);
    })
    it("Should return an array with length of 2", () => {
        assert.lengthOf(filter(users2, ({ active }) => active), 2);
    })

});