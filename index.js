const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to the user service
app.use('/users', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

// Proxy requests to the product service
app.use('/products', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});
