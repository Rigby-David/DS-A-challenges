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
  if (index >= 0) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}

function anagrams(wordOne, wordTwo) {
  const one = wordOne.split('').sort().join('');
  const two = wordTwo.split('').sort().join('');

  if (one === two) {
    return 'true';
  } else if (one != two) {
    return 'false';
  }
}

function fizzBuzz(number) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

function multiplesOfN(n) {
  const arr = [];
  //increment
  for (let i = 1; n <= 50; i++) {
    //variable that multiplies the input
    const multiple = i * n;
    //jump out of loop if exceeds 50
    if (i * n > 50) {
      break;
    }
    //
    arr.push(multiple);
  }
  return arr;
}

module.exports = {
  reverseSentence,
  titleCase,
  oddishOrEvenish,
  at,
  anagrams,
  fizzBuzz,
  multiplesOfN,
};
