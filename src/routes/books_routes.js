const express = require('express');
const router = express.Router();
const Book = require('../models/book')
const multer = require('multer')
const path = require('path');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    } else{
        cb(null, false);
    }
    
}

const upload = multer({
    storage, limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);

})

router.get('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id)
    res.json(book);
})

router.post('/upload', upload.single('file'), (req, res) => {
    console.log(`Storage location is ${req.hostname}/${req.file.path}`);
    console.log(req.file);
    return res.send(req.file);
});

router.post('/', async (req, res) => {
    const {
        title,
        description,
        author,
        category,
        bookImage,
        urlBookDrive
    } = req.body;
    const book = new Book({
        title,
        description,
        author,
        category,
        bookImage,
        urlBookDrive
    });
    await book.save();
    res.status(201).json({
        message: 'The book has been successfully created'
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
    res.status(200).json({
        message: "The book has been successfully updated"
    });
});

router.delete('/:id', async (req, res) => {
    await Book.findByIdAndRemove(req.params.id);
    res.status(204).json({
        message: "The book has been successfully deleted!"
    })
})

module.exports = router;