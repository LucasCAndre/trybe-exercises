const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arr) => {
  let totalSum = 0;
  for (num of arr) {
    totalSum += num;
  }
  return totalSum
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);