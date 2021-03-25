function secondThirdSmallest(array) {
  let results = []
  let newArray = array.sort((a, b) => a - b);
  results = [newArray[1], newArray[2]];
  return results;
};



const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

const assert = require('assert');

assert.deepStrictEqual(secondThirdSmallest(parameter), result);
