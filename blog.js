// Import the express library
const express = require('express');


// Initialize express
const app = express();


// Use the JSON middleware for parsing JSON requests
app.use(express.json());


// In-memory store for the blog posts
let blogPosts = [];


// POST /blog - create a new blog post
app.post('/blog', (req, res) => {
    const post = req.body;
    post.id = blogPosts.length + 1; // Set the id
    blogPosts.push(post);
    res.status(201).json(post); // Respond with the created post
});


// GET /blog - get all blog posts
app.get('/blog', (req, res) => {
    res.json(blogPosts);
});


// GET /blog/:id - get a specific blog post
app.get('/blog/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});


// DELETE /blog/:id - delete a specific blog post
app.delete('/blog/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = blogPosts.findIndex(p => p.id === postId);
    if (postIndex > -1) {
        blogPosts.splice(postIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Post not found');
    }
});

// Listen on port 3000
app.listen(3000, () => console.log('Blog API is running on http://localhost:3000'));