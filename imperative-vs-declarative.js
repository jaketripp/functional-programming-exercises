// https://dzone.com/articles/imperative-vs-declarative-javascript
// https://ui.dev/imperative-vs-declarative-programming/

// SQL - *what* you want, not *how* to get it
// SELECT * FROM Users WHERE Country='Mexico';



function isSubsetImperative(small, big) {
  for (let i = 0; i < small.length; i++) {
    if (!big.includes(small[i])) {
      return false;
    }
  }
  return true;
}

isSubsetImperative([1, 2], [9, 2, 4, 7, 3, 1]);
isSubsetImperative([1, 2], [9, 2, 4, 7, 3]);

function isSubsetDeclarative1(small = [], big = []) {
  return small.every(function(x) {
    return big.includes(x);
  });
}

function isSubsetDeclarative2(small = [], big = []) {
  return small.every(x => {
    return big.includes(x);
  });
}

function isSubsetDeclarative3(small = [], big = []) {
  return small.every(x => big.includes(x));
}

const isSubsetDeclarative4 = (small = [], big = []) => small.every(x => big.includes(x));

isSubsetDeclarative4([1, 2], [9, 2, 4, 7, 3, 1]);
isSubsetDeclarative4([1, 2], [9, 2, 4, 7, 3]);






function getEvenElementsAndDoubleImperative(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      results.push(arr[i] * 2);
    }
  }
  return results;
}

function getEvenElementsAndDoubleDeclarative1(arr) {
  return arr
    .filter(function(x) {
      return x % 2 === 0;
    })
    .map(function(x) {
      return x * 2;
    });
}

const isEven = num => num % 2 === 0;

const getEvenElementsAndDoubleDeclarative2 = arr => arr.filter(isEven).map(x => x * 2);





function sumImperative(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}


function sumDeclarative1(arr) {
  return arr.reduce((total, currentNumber) => total + currentNumber, 0)
}

const add = (x, y) => x + y;
const sumDeclarative2 = arr => arr.reduce(add);