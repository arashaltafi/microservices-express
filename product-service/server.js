const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let products = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' }
];

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Get a product by ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Create a new product
app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(3002, () => {
  console.log('Product service running on port 3002');
});
