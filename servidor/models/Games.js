const mongoose = require('mongoose');

const GamesSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true, 
        unique: true 
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Games', GamesSchema); 