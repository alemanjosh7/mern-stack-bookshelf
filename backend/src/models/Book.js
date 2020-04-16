const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true}, 
    author: {type: String, required: true}, 
    category: {type:String, required: true},
    bookImage: {type: String, required: false},
    urlBookDrive: {type: String, required: false},

},{
    timestamps: true,
});


module.exports = model('Book', bookSchema);