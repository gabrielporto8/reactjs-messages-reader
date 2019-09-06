const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection('mongodb+srv://<username>:<password>@cluster0-pxq4b.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

autoIncrement.initialize(connection);

const scrapSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

scrapSchema.plugin(autoIncrement.plugin, 'Scrap');    
module.exports = mongoose.model('Scrap', scrapSchema);