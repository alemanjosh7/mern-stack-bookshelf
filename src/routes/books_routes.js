const express = require('express');
const router = express.Router();

const Book = require('../models/book')

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);

})

router.get('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id)
    res.json(book);
})


router.post('/', async (req, res) => {
    const {
        title,
        description,
        author,
        category
    } = req.body;
    const book = new Book({
        title,
        description,
        author,
        category
    });
    await book.save();
    res.json({
        status: 'The book has been successfully created'
    });
})

router.put('/:id', async (req, res) => {
    const {
        title,
        description,
        author,
        category
    } = req.body;
    const newBook = {
        title,
        description,
        author,
        category
    };
    await Book.findByIdAndUpdate(req.params.id, newBook);
    res.json({
        status: "The book has been successfully updated"
    });
});

router.delete('/:id', async (req, res) => {
    await Book.findByIdAndRemove(req.params.id);
    res.json({
        status: "The book has been successfully deleted!"
    })
})

module.exports = router;