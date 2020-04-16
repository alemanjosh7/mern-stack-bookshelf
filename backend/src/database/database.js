const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;