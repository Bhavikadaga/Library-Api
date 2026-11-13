const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBooksByGenre,
  getBooksByAuthor,
  getBooksByGenreAndId,
  getBooksByGenreAndAuthor,
  getBooksByGenreAndTitle,
  getBooksByCupboard,
  getBooksByShelf,
  getBooksByCupboardAndShelf,
  getIssuedBooks,
  getIssuedBooksByUser,
  getAvailableBooks,
  getBookById,
} = require('../controllers/books.Controller');

router.get('/', getAllBooks);
router.get('/genre/:genre', getBooksByGenre);
router.get('/genre/:genre/id/:id', getBooksByGenreAndId);
router.get('/genre/:genre/author/:author', getBooksByGenreAndAuthor);
router.get('/genre/:genre/title/:title', getBooksByGenreAndTitle);
router.get('/author/:author', getBooksByAuthor);
router.get('/cupboard/:cupboard', getBooksByCupboard);
router.get('/shelf/:shelf', getBooksByShelf);
router.get('/cupboard/:cupboard/shelf/:shelf', getBooksByCupboardAndShelf);
router.get('/issued', getIssuedBooks);
router.get('/issued/issuedBy/:user', getIssuedBooksByUser);
router.get('/available', getAvailableBooks);
router.get('/:id', getBookById);

module.exports = router;