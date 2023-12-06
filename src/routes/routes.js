const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const postController = require('../controllers/postController');
const { ensureAuthenticated, ensureSeller } = require('../middlewares/middlewares');
const passport = require('passport'); // Import passport here

// User Registration
router.post('/register', userController.register);

// User Login
router.post('/login', passport.authenticate('local', {
    successRedirect: '/success', // Specify your success and failure redirects
    failureRedirect: '/failure'
}), userController.login);

// Define success route
router.get('/success', (req, res) => {
    res.json({ success: true, message: 'Login successful' });
});

// Define failure route
router.get('/failure', (req, res) => {
    res.status(401).json({ success: false, message: 'Login failed' });
});

// Get All Categories with Subcategories
router.get('/categories', categoryController.getAllCategories);

// Create Post
router.post('/posts', ensureAuthenticated, postController.createPost);

// Get All Posts
router.get('/posts', postController.getAllPosts);

module.exports = router;
