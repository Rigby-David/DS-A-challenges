const {
  reverseSentence,
  titleCase,
  oddishOrEvenish,
  at,
  anagrams,
} = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
    it('should capitalize first letter', () => {
      expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
    it('should determines if a number is Oddish or Evenish', () => {
      expect(oddishOrEvenish('121')).toBe('Evenish');
    });
    it('should return the item at corresponding index', () => {
      const array1 = at(['a', 'b', 'c', 'd', 'e'], 1);
      const array2 = at(['a', 'b', 'c', 'd', 'e'], -2);

      expect(array1).toBe('b');
      expect(array2).toBe('d');
    });
    it('should take two words and return true if anagrams, false otherwise', () => {
      expect(anagrams('superintended', 'unpredestined')).toBe('true');
      expect(anagrams('pictorialness', 'documentarily')).toBe('false');
    });
  });
});
