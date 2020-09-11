function sumOfElementsDivisibleBy3Imperative(arr) {
  const total = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 3 === 0) {
      total += element;
    }
  }
  return total;
}

const divisibleBy = denominator => num => num % denominator === 0; 
const add = (x, y) => x + y;

const sumOfElementsDivisibleBy3Declarative = arr => arr.filter(divisibleBy(3)).reduce(add);

sumOfElementsDivisibleBy3Declarative([9, 2, 4, 7, 3, 1]);

[9, 2, 4, 7, 3, 1].filter(divisibleBy(3)).reduce(add);

[9, 3].reduce(add);

12

