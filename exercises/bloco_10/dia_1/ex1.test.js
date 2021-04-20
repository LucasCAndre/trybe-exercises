const sum = require('./ex1');

describe('exercicio1', () => {
  it('A função retorna 9', () => {
    expect(9).toEqual(sum(5, 4));
  });
  it('A função retorna zero', () => {
    expect(0).toEqual(sum(0, 0));
  });
  it('A função retorna um erro', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('A função retorna um erro', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});