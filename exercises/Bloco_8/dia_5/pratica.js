// Faça uma lista com as suas frutas favoritas
const specialFruit = ['pera', 'uva', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maionese', 'limao', 'vinagre'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));