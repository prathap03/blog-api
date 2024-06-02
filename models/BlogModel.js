const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  timestamp: { type: Date, default: Date.now }
});

const BlogPost = mongoose.model('BlogPost', blogSchema);
module.exports = {BlogPost}