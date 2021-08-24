const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('testa a fnção', () => {
  uppercase('teste vamo que vamo', (result) => {
    expect(result).toBe('TESTE VAMO QUE VAMO');
  })
})