// https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad

// assign to identifier
const square = function(x) {
  return x * x;
};
square(5);

// re-assign to new identifier
const foo = square;
foo(6);

// passing functions as parameters
function formalGreeting(name) {
  console.log(`How are you ${name}?`);
}
function casualGreeting() {
  console.log(`YOOOO ${name.toUpperCase()}!`);
}
function greet1(isFormal, name, greetFormal, greetCasual) {
  if (isFormal) {
    greetFormal(name);
  } else {
    greetCasual(name);
  }
}

function greet2(
  isFormal,
  greetFormal = formalGreeting,
  greetCasual = casualGreeting
) {
  if (isFormal) {
    greetFormal();
  } else {
    greetCasual();
  }
}

// returning a function - this is super contrived and not helpful, 
// but just wanted to show that you can return a function
const greet3 = (isFormal, name, greetFormal = formalGreeting, greetCasual = casualGreeting) => {
  return () => isFormal ? greetFormal(name) : greetCasual(name);
};

// now I  can call greetJake()
let isFormal = true;
const name = "Jake";
const greetJake = greet3(isFormal, name);
greetJake(name)




// MAP
// You have a function, A => B
// You have an array of A, [A]
// [A].map(A => B) becomes [B]


function doubleWithForLoop(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
const doubleForResult = doubleWithForLoop([1, 2, 3]);

const doubleWithMap = arr => arr.map(x => x * 2);
const doubleMapResult = doubleWithMap([1, 2, 3]);



function getAgesWithForLoop(birthYears) {
  const ages = [];
  for (let i = 0; i < birthYears.length; i++) {
    let age = 2018 - birthYears[i];
    ages.push(age);
  }
}
const agesForResult = getAgesWithForLoop([1975, 1997, 2002, 1995, 1985]);

const getAgesWithMap = birthYears => birthYears.map(year => 2020 - year);
const agesMapResult = getAgesWithForLoop([1975, 1997, 2002, 1995, 1985]);



const people = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 27 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 24 }
];

function getAdultsWithForLoop(people) {
  const adults = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      adults.push(people[i]);
    }
  }
  return adults;
}

const getAdultsWithMap = people => people.filter(person => person.age >= 18);