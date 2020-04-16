const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    title: { type: String, required: true, unique: true},
    description: { type: String, required: false}, 

},{
    timestamps: true,
});


module.exports = model('Category', categorySchema);