const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    required: true,
  },
  blogImages: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
  },
  firstPara: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;