// src/controllers/postController.js
const User_Post = require('../models/User_Post');

module.exports = {
    createPost: async (req, res) => {
        const { user_id, category_id, subcategory_id, image_urls, description } = req.body;

        try {
            await User_Post.create({
                user_id,
                category_id,
                subcategory_id,
                image_urls,
                description
            });

            res.status(201).json({ message: 'Post created successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred' });
        }
    },

    getAllPosts: async (req, res) => {
        try {
            const posts = await User_Post.findAll();
            res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred' });
        }
    }
};
