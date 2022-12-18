import { assert } from 'chai';
import capitalize from '../src/capitalize.js';

describe("capitalize.js", () => {
    it("Should return capitalized first letter and the remaining lowercase if the value is written in lowercase", () => {
        assert.equal(capitalize("test"), "Test");
    });
    it("Should return capitalized first letter and the remaining lowercase if the value is written with lowercase and uppercase combined", () => {
        assert.equal(capitalize("tEsT"), "Test");
    })
    it("Should return capitalized first letter and the remaining lowercase if the value is written in uppercase", () => {
        assert.equal(capitalize("TEST"), "Test");
    })
    it("Should return a string if value is an integer", () => {
        assert.typeOf(capitalize(123), 'string');
    })
    it("Should return empty string", () => {
        assert.isEmpty(capitalize(""), "");
    })

});