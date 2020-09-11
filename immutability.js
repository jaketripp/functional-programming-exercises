// since myArray is a constant, we're safe right?
const myArray = [1,2,3,4,5,6,7,8,9,10]

function blackBox(arr, x, y, z) {
  const bool = true;
  const num = 17 / 3;
  const answerToLife = 42;
  const name = "Jake";
  const str = `${name} is ${num} and it's ${bool} that ${answerToLife}`;
  // the dangerous, immutable line that makes our code a lot more complex
  return arr.splice(0, 3);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


blackBox(myArray, 42, "yes", false)
// myArray is now [4,5,6,7,8,9,10]

const favoriteNumber = myArray[getRandomInt(myArray.length - 1)];

// blackBox(myArray, 42, "yes", false)
// myArray is now [7,8,9,10]

