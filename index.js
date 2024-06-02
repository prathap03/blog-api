const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {BlogPost}= require('./models/BlogModel')

mongoose.connect('mongodb://localhost:27017/blog-api')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json())
app.post('/api/blog', async (req, res) => {
    console.log(req.body)
    let blogPost = await BlogPost.create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    });
    blogPost = await blogPost.save();
  
  
    res.send(blogPost);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));