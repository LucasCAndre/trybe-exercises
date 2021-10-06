function testaNumero(num) {
  if (num === 0) return 'neutro';

  if (num < 0) return 'negativo';

  if (num > 0) return 'positivo';

  return 'o valor deve ser um número';
};

module.exports = testaNumero;
