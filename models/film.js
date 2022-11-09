const mongoose = require("mongoose")
const filmSchema = mongoose.Schema({
name: String,
director: String,
duration: Number
})
module.exports = mongoose.model("Film",
filmSchema)