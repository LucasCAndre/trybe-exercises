const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

const expected =  myRemove([1, 2, 3, 4], 3);

assert.strictEqual(typeof myRemove, 'function');


assert.deepStrictEqual(expected, [1, 2, 4]);

assert.notDeepStrictEqual(expected, [1, 2, 3, 4]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])
