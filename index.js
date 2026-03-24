const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.use(express.json());

const bookRoutes = require('./routes/books.router.js');
app.use('/api', bookRoutes);

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Library API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          h1 {
            text-align: center;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: white;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }
          th {
            background-color: #333;
            color: white;
          }
          tr:nth-child(even) {
            background-color: #f9f9f9;
          }
          a {
            text-decoration: none;
            color: blue;
          }
        </style>
      </head>
      <body>
        <h1>📚 Available API Endpoints</h1>

        <table>
          <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Description</th>
          </tr>

          <tr><td>GET</td><td><a href="/api/">/api/</a></td><td>Get all books</td></tr>
          <tr><td>GET</td><td>/api/genre/:genre</td><td>Get books by genre</td></tr>
          <tr><td>GET</td><td>/api/cupboard/:cupboard</td><td>Get books by cupboard</td></tr>
          <tr><td>GET</td><td>/api/shelf/:shelf</td><td>Get books by shelf (1a–5e)</td></tr>
          <tr><td>GET</td><td>/api/cupboard/:c/shelf/:s</td><td>Get books by cupboard & shelf</td></tr>
          <tr><td>GET</td><td><a href="/api/issued">/api/issued</a></td><td>Get issued books</td></tr>
          <tr><td>GET</td><td><a href="/api/available">/api/available</a></td><td>Get available books</td></tr>
          <tr><td>GET</td><td><a href="/api/category/genres">/api/category/genres</a></td><td>Get all genres</td></tr>
          <tr><td>GET</td><td><a href="/api/category/cupboards">/api/category/cupboards</a></td><td>Get all cupboards</td></tr>
          <tr><td>GET</td><td><a href="/api/category/shelves">/api/category/shelves</a></td><td>Get all shelves</td></tr>
          <tr><td>GET</td><td>/api/:id</td><td>Get book by ID</td></tr>

        </table>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});