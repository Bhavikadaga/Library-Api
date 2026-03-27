const books = require('../data/books.data.json');
const category = require('../data/category.data.json')
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
  try {
    const shelfMap = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const shelfNumber = shelfMap[req.params.shelf];
    if (!shelfNumber) return res.status(400).json({ message: "Invalid shelf. Use a, b, c, d or e" });
    const bookShelf = books.filter(s => s.shelf === shelfNumber);
    if (bookShelf.length === 0) return res.status(404).json({ message: "No books found on this shelf" });
    return res.status(200).json(bookShelf);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
    const shelfMap = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const shelfNumber = shelfMap[req.params.shelf];
    if (!shelfNumber) return res.status(400).json({ message: "Invalid shelf. Use a, b, c, d or e" });
    const bookByCS = books.filter(b => b.cupboard === parseInt(req.params.cupboard) && b.shelf === shelfNumber);
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

const getBooksByAuthor = (req, res) => {
  try {
    const bookAuthor = books.filter(b => b.author === req.params.author);
    if (bookAuthor.length === 0) return res.status(404).json({ message: "No books found for this author" });
    return res.status(200).json(bookAuthor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBooksByGenreAndId = (req, res) => {
  try {
    const book = books.find(b => b.genre === req.params.genre && b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: "No book found" });
    return res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBooksByGenreAndAuthor = (req, res) => {
  try {
    const bookGA = books.filter(b => b.genre === req.params.genre && b.author === req.params.author);
    if (bookGA.length === 0) return res.status(404).json({ message: "No books found" });
    return res.status(200).json(bookGA);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBooksByGenreAndTitle = (req, res) => {
  try {
    const bookGT = books.filter(b => b.genre === req.params.genre && b.title === req.params.title);
    if (bookGT.length === 0) return res.status(404).json({ message: "No books found" });
    return res.status(200).json(bookGT);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getIssuedBooksByUser = (req, res) => {
  try {
    const userBooks = books.filter(b => b.issuedTo === req.params.user);
    if (userBooks.length === 0) return res.status(404).json({ message: "No books issued to this user" });
    return res.status(200).json(userBooks);
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
  getShelves,
  getBooksByAuthor,
  getBooksByGenreAndId,
  getBooksByGenreAndAuthor,
  getBooksByGenreAndTitle,
  getIssuedBooksByUser
};