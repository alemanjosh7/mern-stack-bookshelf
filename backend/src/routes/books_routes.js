const express = require('express');
const router = express.Router();
const Book = require('../models/Book')
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

const {getBooks, createBooks, getBook, updateBook, deleteBook} = require('../controllers/books_controllers');


router.route('/')
    .get(getBooks)
    .post(createBooks)

router.route('/:id')
    .get(getBook)
    .put(updateBook)
    .delete(deleteBook);

module.exports = router;
// router.get('/', async (req, res) => {
//     const books = await Book.find();
//     res.json(books);

// })

// router.get('/:id', async (req, res) => {
//     const book = await Book.findById(req.params.id)
//     res.json(book);
// })

// router.post('/upload', upload.single('file'), (req, res) => {
//     console.log(`Storage location is ${req.hostname}/${req.file.path}`);
//     console.log(req.file);
//     return res.send(req.file);
// });

