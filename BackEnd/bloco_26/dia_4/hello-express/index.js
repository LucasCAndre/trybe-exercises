const express = require('express');

const bodyParser = require('body-parser');

const app = express(); // 1

app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

app.get('/hello', handleHelloWorldRequest); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta Xablau');
}); // 3

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Ola World!'); // 4
};

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const sortedDrinks = drinks.sort(( a, b ) => {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
});

console.log(sortedDrinks);

app.get('/drinks', function (req, res) {
  res.json(sortedDrinks);
});

// app.get('/recipes/search', function (req, res) {
//   const { name } = req.query;
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name));
//   res.status(200).json(filteredRecipes);
// });

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.price >= parseInt(minPrice) && r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
})

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});
