const booksCtrl = {};

const Book = require('../models/Book');

booksCtrl.getBooks = async (req, res) => {

    const books = await Book.find();
    res.json(books);
}

booksCtrl.createBooks = async (req, res) => {
    const {
        title,
        description,
        author, 
        category,
        bookImage,
        urlBookDrive,
    } = req.body;
    const newBook = new Book({
        title,
        description,
        author,
        category,
        bookImage,
        urlBookDrive,
    })
    await newBook.save();
    res.json({
        message: 'Book Saved'
    });
};

booksCtrl.getBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book)
}

booksCtrl.updateBook = async (req, res) => {
    const {title, description, author, category, bookImage, urlBookDrive} = req.body;
    await Book.findOneAndUpdate({_id: req.params.id}, {
        title,
        description,
        author,
        category,
        bookImage,
        urlBookDrive
    })
    res.json({message: 'Book Updated'}); 
}
booksCtrl.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({message: 'Book Deleted'}); 
}

module.exports = booksCtrl;