
const assert = require('assert');
const longestCommonPrefix = require('./index');

describe('longestCommonPrefix', function() {
    it('should be a function', function() {
        assert.equal(typeof longestCommonPrefix, 'function');
    });

    it('should return the prefix if there is only one string in the array', function() {
        assert.equal(longestCommonPrefix(['abc']), 'abc');
    });

    it('should return an empty string if there we no common prefixes found', function() {
        assert.equal(longestCommonPrefix(['ca','a']), '');
        assert.equal(longestCommonPrefix(['dog','racecar','car']), '');
    });

    it('should return the correct common prefix if the rest are valid', function() {
        assert.equal(longestCommonPrefix(["flower","flow","flight"]), 'fl');
        
        const { longArr, expectedAnswer } = require('./data');
        assert.equal(longestCommonPrefix(longArr), expectedAnswer);
    });
});

console.log('longestCommonPrefix', longestCommonPrefix);