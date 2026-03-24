const books = require('../data/bookDetails.json');
const getAllBooks = (req, res) => {
    try{
        res.status(200).json(books);        
    }catch(err){
        res.status(500).json({message:err.message})
    }
};

const getBooksByGenre = (req, res) => {
    try{
        const bookGenre = books.filter(g=> g.genre === req.params.genre);
        if(bookGenre === 0) return res.status(404).json({message: "Book not Found"});
        res.status(200).json(bookGenre);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const getBooksByCupboard = (req, res) => {
    try{
        const bookCupboard = books.filter(c => c.cupboard === parseInt(req.params.cupboard));
        if(bookCupboard.length === 0) return res.status(404).json({message: "No cupboard found"});
        return res.status(200).json(bookCupboard);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const getBooksByShelf = (req, res) => {

};

const getBooksByCupboardAndShelf = (req, res) => {

};

const getBookById = (req, res) => {

};

const getIssuedBooks = (req, res) => {

};

const getAvailableBooks = (req, res) => {

};

module.exports = {
  getAllBooks,
  getBooksByGenre,
  getBooksByCupboard,
  getBooksByShelf,
  getBooksByCupboardAndShelf,
  getBookById,
  getIssuedBooks,
  getAvailableBooks,
};