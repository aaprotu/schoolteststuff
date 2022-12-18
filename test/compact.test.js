import { assert } from 'chai';
import compact from '../src/compact.js'

describe('compact', () => {
    it('should remove all falsey values from the array', () => {
      const input = [0, 1, false, 2, '', 3]
      const expectedOutput = [1, 2, 3]
      assert.deepEqual(compact(input),expectedOutput);
    })
  
    it('should return an empty array if all values in the input array are falsey', () => {
      const input = [0, false, '', undefined, null, NaN]
      const expectedOutput = []
      assert.deepEqual(compact(input),expectedOutput);
    })
  
    it('should return the input array if it does not contain any falsey values', () => {
      const input = [1, 2, 3]
      const expectedOutput = [1, 2, 3]
      assert.deepEqual(compact(input),expectedOutput);
    })
  
    it('should return an empty array if given an empty array', () => {
      const input = []
      const expectedOutput = []
      assert.deepEqual(compact(input),expectedOutput);
    })
  })