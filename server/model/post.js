const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    default: null
  },
  snippet: {
    type: String,
    required: null
  },
  body: {
    type: String,
    required: true
  },
  imgArray: {
    type: Object,
    default: null
  }
})

module.exports = mongoose.model("Post", postSchema)
