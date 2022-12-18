import { assert } from 'chai';
import difference from '../src/difference.js'

describe('difference', () => {
    it('should return an array of values not included in the other given arrays', () => {
      const array = [2, 1]
      const values = [2, 3]
      const expectedOutput = [1]
      assert.deepEqual(difference(array, values), expectedOutput)
    })
  
    it('should return an empty array if the input array is not an array-like object', () => {
      const array = 2
      const values = [2, 3]
      const expectedOutput = []
      assert.deepEqual(difference(array, values), expectedOutput)
    })
  
    it('should return a new array even if all values are included in the other given arrays', () => {
      const array = [2, 1]
      const values = [2, 1, 3]
      const expectedOutput = []
      assert.deepEqual(difference(array, values), expectedOutput)
    })
  })