const books = require('../data/books.data.json');
const category = require('../data/category.json')
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
        if(bookGenre.length === 0) return res.status(404).json({message: "Book not Found"});
        res.status(200).json(bookGenre);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const getBooksByCupboard = (req, res) => {
    try{
        const bookCupboard = books.filter(c => c.cupboard === parseInt(req.params.cupboard));
        if(bookCupboard.length === 0) return res.status(404).json({message: "No cupboard umber found"});
        return res.status(200).json(bookCupboard);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const getBooksByShelf = (req, res) => {
    try{
        const bookShelf = books.filter(s => s.shelf === parseInt(req.params.shelf));
        if(bookShelf.length === 0) return res.status(404).json({message: "No shelf number found"});
        return res.status(200).json(bookShelf);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const getBookById = (req, res) => {
    try{
        const bookId = books.find(s => s.id === parseInt(req.params.id));
        if(!bookId) return res.status(404).json({message: "No book id found"});
        return res.status(200).json(bookId);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const getBooksByCupboardAndShelf = (req, res) => {
  try {
    const bookByCS = books.filter(b => b.cupboard === parseInt(req.params.cupboard) && b.shelf === parseInt(req.params.shelf));
    if (bookByCS.length === 0) return res.status(404).json({ message: "No books found" });
    return res.status(200).json(bookByCS);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getIssuedBooks = (req, res) => {
    try{
        const bookIssued = books.filter(s => s.isIssued === true);
        if(bookIssued.length === 0) return res.status(404).json({message: "No issued book found"});
        return res.status(200).json(bookIssued);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

const getAvailableBooks = (req, res) => {
  try {
    const availableBooks = books.filter(a => a.isIssued === false);
    if (availableBooks.length === 0) return res.status(404).json({ message: "No available books found" });
    return res.status(200).json(availableBooks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getGenres = (req, res) => {
  try {
    return res.status(200).json(category.genre);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCupboards = (req, res) => {
  try {
    return res.status(200).json(category.cupboards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getShelves = (req, res) => {
  try {
    return res.status(200).json(category.shelves);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllBooks,
  getBooksByGenre,
  getBooksByCupboard,
  getBooksByShelf,
  getBookById,
  getBooksByCupboardAndShelf,
  getIssuedBooks,
  getAvailableBooks,
  getGenres,
  getCupboards,
  getShelves
};