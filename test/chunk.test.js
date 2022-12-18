import { assert } from 'chai';
import  chunk  from '../src/chunk.js';


describe("chunk", () => {
    it('should return an empty array if the input array is empty or the size is less than 1', () => {
        assert.deepEqual(chunk([], 0), []);
        assert.deepEqual(chunk([], -1), []);
        assert.deepEqual(chunk([1, 2, 3], 0), []);
        assert.deepEqual(chunk([1, 2, 3], -1), []);
      });
    
      it('should return an array of chunks of the specified size', () => {
        assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
      });
});