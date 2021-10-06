const { expect } = require('chai');

const testaNumero = require('./testaNumero');

describe('Testa a natureza de um numero', () => {
  it('Número negativo', () => {
    const meuNumeroNegativo = testaNumero(-1);
    expect(meuNumeroNegativo).equals('negativo');
  });

  it('Número neutro', () => {
    const meuNumeroNeutro = testaNumero(0);
    expect(meuNumeroNeutro).equals('neutro');
  });

  it('Número positivo', () => {
    const meuNumeroPositivo = testaNumero(1);
    expect(meuNumeroPositivo).equals('positivo');
  });

  it('Caso não seja um numero', () => {
    const testaComString = testaNumero('O');
    expect(testaComString).equals('o valor deve ser um número');

    const testaComBool = testaNumero(false);
    expect(testaComBool).equals('o valor deve ser um número');

    const testaComUndef = testaNumero(undefined);
    expect(testaComUndef).equals('o valor deve ser um número');
  })
});
