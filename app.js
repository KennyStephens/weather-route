const express = require('express');

const forecastRouter = require('./routes/forecast');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', forecastRouter);

const port = (process.env.PORT || 5500);

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});