import { assert } from 'chai';
import drop from '../src/drop.js'

describe('drop', () => {
    it('should return an empty array if the input array is empty', () => {
      assert.deepEqual(drop([]), []);
    });
  
    it('should return the input array if the number of elements to drop is 0 or negative', () => {
      assert.deepEqual(drop([1, 2, 3], 0), [1, 2, 3]);
      assert.deepEqual(drop([1, 2, 3], -1), [1, 2, 3]);
    });
  
    it('should return the correct slice of the input array if the number of elements to drop is positive', () => {
      assert.deepEqual(drop([1, 2, 3], 1), [2, 3]);
      assert.deepEqual(drop([1, 2, 3], 2), [3]);
    });
  
    it('should handle arrays with missing elements', () => {
      assert.deepEqual(drop([1, 2, undefined, undefined], 2), [undefined, undefined]);
    });
  
    it('should handle non-integer values for the number of elements to drop', () => {
      assert.deepEqual(drop([1, 2, 3, 4], 1.5), [2, 3, 4]);
      assert.deepEqual(drop([1, 2, 3, 4], 2.5), [3, 4]);
    });
  });