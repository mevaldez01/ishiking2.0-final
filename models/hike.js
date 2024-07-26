const mongoose = require('mongoose');

const hikeSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String
});

module.exports = mongoose.model('Hike', hikeSchema);
