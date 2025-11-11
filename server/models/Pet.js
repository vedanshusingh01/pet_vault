const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Pet', PetSchema);