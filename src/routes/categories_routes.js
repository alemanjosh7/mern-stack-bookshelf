const mongoose = require('mongoose');
const { Schema } = mongoose;

const SchemaCategory = new Schema({

    

},{
    timestamps: true,
});


module.exports = mongoose.model('Category', SchemaCategory);