const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const bookRoutes = require('./routes/books.router.js');
app.use('/books', bookRoutes);

app.listen(port, () => {
  try {
    console.log(`Server running at http://localhost:${port}`);
  } catch (err) {
    console.log(`error is ${err}`);
  }
});