const data = require('./pratica');

test('mock da função subtrair', () => {
  data.subtrair = jest.fn();
  data.subtrair()
  expect(data.subtrair).toHaveBeenCalled();
});

test('função multiplicar com retorno padrao de 10', () => {
  data.multiplicar = jest.fn().mockReturnValue(10);
  data.multiplicar();
  expect(data.multiplicar).toHaveBeenCalled();
  expect(data.multiplicar()).toBe(10);
});

test('Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {
  data.somar = jest.fn();
  data.somar.mockImplementation((a, b) => a + b);
  data.somar(3, 6);
  expect(data.somar).toHaveBeenCalled();
  expect(data.somar).toHaveBeenCalledWith(3, 6);
  expect(data.somar(3, 6)).toBe(9);
})

test('divisao', () => {
  data.dividir = jest
  .fn()
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);

  expect(data.dividir).toHaveBeenCalledTimes(0);
  expect(data.dividir()).toBe(2);
  expect(data.dividir).toHaveBeenCalledTimes(1);
  expect(data.dividir()).toBe(5);
  expect(data.dividir).toHaveBeenCalledTimes(2);
  expect(data.dividir()).toBe(15);
  expect(data.dividir()).toBe(15);
  expect(data.dividir).toHaveBeenCalledTimes(4);
})