const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const menu = (produtos, precos) => produtos.map((produto, index) => ({[produto]: precos[index]}));

console.log(menu(products, prices));