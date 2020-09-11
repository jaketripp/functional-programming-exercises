// All curried functions return partial applications,
// but not all partial applications are the result of curried functions.

const people = [
  { name: "Peter", age: 16, born: "US", money: -40 },
  { name: "Lisa", age: 18, born: "US", money: 400 },
  { name: "John", age: 27, born: "US", money: 3 },
  { name: "Nele", age: 14, born: "DE", money: 10000 },
  { name: "Kyle", age: 24, born: "UK", money: 5 },
  { name: "Muhammad", age: 29, born: "IN", money: 1000 },
  { name: "Ronald", age: 74, born: "US", money: 100000000 }
];

// takes a threshold, then takes an object with number property, `age`
// normally I wouldn't recommend coupling your functions so tightly to your data structure
// this is for demo purposes and to show point-free syntax
const isOldEnough = threshold => ({ age }) => age >= threshold;

const canDrive = isOldEnough(16);
const isAdult = isOldEnough(18);

const adults = people.filter(isAdult);

const canVote = isAdult;
const canDrink = isOldEnough(21);
const canRentCar = isOldEnough(25);
const isOldEnoughToBePresident = isOldEnough(35);

const drivers = people.filter(canDrive);

const isFrom = requiredCountry => ({ born }) => requiredCountry === born;

const isAmerican = isFrom("US");

const americans = people.filter(person => isAmerican(person.born));

const hasBoatLoadsOfMoney = ({ money }) => money >= 100000000;


// maybe we should think about setting the bar a little higher 🤔
const canBePresident = person => {
  return (
    isOldEnoughToBePresident(person) &&
    isAmerican(person) &&
    hasBoatLoadsOfMoney(person)
  );
};

const eligiblePresidents = people.filter(canBePresident);
