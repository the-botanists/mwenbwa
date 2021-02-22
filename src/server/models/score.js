const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
    username: {type: String, required: true},
    numOfLeafs: {type: Number, required: true},
    numOfTrees: {type: Number, required: true},
});

module.exports = mongoose.model("Score", scoreSchema);
