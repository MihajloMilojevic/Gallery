const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	image: String,
	author: String
}, {
	timestamps: true
})

module.exports = mongoose.model("post", schema);