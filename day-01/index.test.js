const {
  reverseSentence,
  titleCase,
  oddishOrEvenish,
  at,
  anagrams,
  fizzBuzz,
  multiplesOfN,
  addPunctuation,
  rootDigit,
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
    it('takes a positive integer and returns an array with x3 = Fizz, x5 = Buzz, and x3+x5 = FizzBuzz', () => {
      expect(fizzBuzz(16)).toEqual([
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
        16,
      ]);
    });
    it('should return all numbers that are multiples of n', () => {
      expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
      expect(multiplesOfN(25)).toEqual([25, 50]);
      expect(multiplesOfN(75)).toEqual([]);
    });
    it('should take a string of punctuation and returns another string with the punctuation', () => {
      const addExcitement = addPunctuation('!!!');
      const unSure = addPunctuation('?!?');

      expect(addExcitement('Hello World')).toEqual('Hello World!!!');
      expect(addExcitement('Pokemon, catch em all')).toEqual(
        'Pokemon, catch em all!!!'
      );
      expect(unSure('Hello World')).toEqual('Hello World?!?');
      expect(unSure('Pokemon, catch em all')).toEqual(
        'Pokemon, catch em all?!?'
      );
    });
    it('takes a number, returns the sum off all input numbers and repeats process if the sum is more than one number', () => {
      console.log('rootDigit(123', rootDigit(123));
      expect(rootDigit(123)).toEqual(6);
    });
  });
});
