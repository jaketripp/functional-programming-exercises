// All curried functions return partial applications, 
// but not all partial applications are the result of curried functions.

const people = [
  { name: "Peter", age: 16, born: "US" },
  { name: "Mark", age: 18, born: "US" },
  { name: "John", age: 27, born: "US" },
  { name: "Nele", age: 14, born: "DE" },
  { name: "Kyle", age: 24, born: "UK" },
  { name: "Muhammad", age: 29, born: "IN" },
  { name: "Ronald", age: 74, born: "US" }
];

const adults = people.filter(person => person.age >= 18);

const isOldEnough = threshold => age => age >= threshold;

const canDrive = isOldEnough(16);
const canVote = isOldEnough(18);
const canDrink = isOldEnough(21);
const canRentCar = isOldEnough(25);
const isOldEnoughToBePresident = isOldEnough(35);

const drivers = people.filter(person => canDrive(person.age))

const isFrom = requiredCountry => givenCountry => requiredCountry === givenCountry;

const isAmerican = isFrom("US");

const americans = people.filter(person => isAmerican(person.born))


const canBePresident = person => isOldEnoughToBePresident(person.age) && isAmerican(person.born);

const eligiblePresidents = people.filter(canBePresident)