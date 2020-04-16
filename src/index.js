require('dotenv').config()
const {
    mongoose
} = require('./database/database')
const express = require('express')
const morgan = require('morgan');
const path = require('path')
const multer = require('multer')
const app = express();

// Settings

app.set('port', process.env.PORT || 3000);



// Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Routes
app.use('/api/books', require('./routes/books_routes'));


// Static Files

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    return res.send('This is the homepage');
});



// Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})