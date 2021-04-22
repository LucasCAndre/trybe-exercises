const dados = require('./exercicios');

test('Defina o retorno padrão como 10.Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  dados.randomNum = jest.fn()
  .mockReturnValue(10);

  expect(dados.randomNum).toHaveBeenCalledTimes(0);
  expect(dados.randomNum()).toBe(10);
  expect(dados.randomNum).toHaveBeenCalledTimes(1);

  dados.randomNum.mockImplementation((a, b) => a / b);
  expect(dados.randomNum(20, 10)).toBe(2);
})

