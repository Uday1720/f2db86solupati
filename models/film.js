const mongoose = require("mongoose")
const filmSchema = mongoose.Schema({
name: {
    type: String,
    required: [true, "Film Name cannot be empty"]
},
director: {
    type: String,
    required: [true, "Director Name cannot be empty"]
},
duration: {
    type: Number,
    required: [true, "Duration cannot be empty"],
    min: 0,
    max: 180
}
})
module.exports = mongoose.model("Film",
filmSchema)