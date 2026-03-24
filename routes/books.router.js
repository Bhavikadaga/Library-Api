const express = require('express');
const router = express.Router();
const {getAllBooks, 
       getBooksByGenre, 
       getBooksByCupboard, 
       getBooksByShelf, 
       getBookById, 
       getBooksByCupboardAndShelf,
       getIssuedBooks, 
       getAvailableBooks,
       getGenres,
       getCupboards,
       getShelves} =  require('../controllers/books.Controller');

router.get('/', getAllBooks);

router.get('/genre/:genre', getBooksByGenre);
router.get('/cupboard/:cupboard', getBooksByCupboard);
router.get('/shelf/:shelf', getBooksByShelf);
router.get('/cupboard/:cupboard/shelf/:shelf', getBooksByCupboardAndShelf);

router.get('/issued', getIssuedBooks);
router.get('/available', getAvailableBooks);

router.get('/category/genres', getGenres);
router.get('/category/cupboards', getCupboards);
router.get('/category/shelves', getShelves);

router.get('/:id', getBookById);

module.exports = router;