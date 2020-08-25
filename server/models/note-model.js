const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

const noteSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Note', noteSchema);