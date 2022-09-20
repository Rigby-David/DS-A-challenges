function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
}

function oddishOrEvenish(number) {
  let num = 0;
  String(number)
    .split('')
    .map((number) => (num += Number(number)));
  return num % 2 === 0 ? 'Evenish' : 'Oddish';
}

function at(arr, index) {
  if (arr.length === 0) {
    return at;
  }
}

module.exports = { reverseSentence, titleCase, oddishOrEvenish, at };
