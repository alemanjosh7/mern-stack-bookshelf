const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchemaBook = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true}, 
    author: {type: String, required: true}, 
    category: {type:String, required: true},
    bookImage: {type: String, required: true},
    urlBookDrive: {type: String, required: true},

},{
    timestamps: true,
});


module.exports = mongoose.model('Book', SchemaBook);