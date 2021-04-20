const { TestScheduler, TestWatcher } = require('@jest/core');
const myFizzBuzz = require('./ex4');

test('Numero divisivel por 3 e 5', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
})

test('Numero divisivel por 3', () => {
  expect(myFizzBuzz(9)).toEqual('fizz');
})

test('Numero divisivel por 5', () => {
  expect(myFizzBuzz(20)).toEqual('buzz');
})

test('Numero não é divisivel por 3 nem 5', () => {
  expect(myFizzBuzz(19)).toEqual(19);
})

test('Num não é um número', () => {
  expect(myFizzBuzz('19')).toEqual(false);
})
