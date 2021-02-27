const mongoose = require("mongoose");

const gamelogSchema = mongoose.Schema({
    username: {type: String, required: true},
    action: {type: String, required: true},
    date: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Gamelog", gamelogSchema);
