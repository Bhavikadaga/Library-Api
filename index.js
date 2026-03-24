const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT


app.use(express.json());

const bookRoutes = require('./routes/books.router.js');


app.use('/', (req, res) => {
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

          <tr><td>GET</td><td>/</td><td>Home endpoint</td></tr>
          <tr><td>GET</td><td>/genre/:genre</td><td>Get books by genre</td></tr>
          <tr><td>GET</td><td>/cupboard/:cupboard</td><td>Get books by cupboard</td></tr>
          <tr><td>GET</td><td>/shelf/:shelf</td><td>Get books by shelf (1a–5e)</td></tr>
          <tr><td>GET</td><td>/cupboard/:c/shelf/:s</td><td>Get books by cupboard & shelf</td></tr>
          <tr><td>GET</td><td>/issued</td><td>Get all issued books</td></tr>
          <tr><td>GET</td><td>/available</td><td>Get all available books</td></tr>
          <tr><td>GET</td><td>/category/genres</td><td>Get all genres</td></tr>
          <tr><td>GET</td><td>/category/cupboards</td><td>Get all cupboards</td></tr>
          <tr><td>GET</td><td>/category/shelves</td><td>Get all shelves (1a–5e)</td></tr>
          <tr><td>GET</td><td>/:id</td><td>Get book by ID</td></tr>
        </table>
      </body>
    </html>
  `);
});

app.listen(port, () =>{
    try{
        console.log(`Server running at http://localhost:${port}`);
    }catch(err){
        console.log(`error is ${err}`);
    }
})