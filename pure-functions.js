// IMPURE - works as long as someone doesn't mutate anything in a way you haven't anticipated

let IMPURE_IMPURE_TAX = 20;
let IMPURE_IMPURE_PRICE = 45; 

function impureCalculateTax() {
  return IMPURE_PRICE * ((IMPURE_TAX + 100) / 100);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function impureMeddler() {
  setTimeout(() => {
    IMPURE_TAX = 40;
    IMPURE_PRICE = 1;
    console.log("hey")
  }, getRandomInt(3))
}

function impureMain() {
  meddler()
  return impureCalculateTax()
}

console.assert(impureMain() === 54)

// PURE - stops people from mutating things, easy to test, compartmentalized


const PURE_TAX = 20;
const PURE_PRICE = 45;

function pureMeddlerAttempt() {
  setTimeout(() => {
    // PURE_TAX = 40;
    // PURE_PRICE = 1;
    console.log("hey");
  }, getRandomInt(3));
}


function pureCalculateTax(price, tax) {
  return price * ((tax + 100) / 100);
}

function pureMain() {
  pureMeddlerAttempt();
  return pureCalculateTax(PURE_PRICE, PURE_TAX)
}

console.assert(pureMain() === 54);
