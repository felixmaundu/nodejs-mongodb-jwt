// src/controllers/categoryController.js
const Category = require('../models/Category');
const Subcategory = require('../models/Subcategory');

module.exports = {
    getAllCategories: async (req, res) => {
        try {
            const categories = await Category.findAll({
                include: Subcategory
            });
            res.json(categories);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred' });
        }
    }
};
