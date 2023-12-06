// app/models/User_Post.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../src/config/database');

const User_Post = sequelize.define('User_Post', {
    post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    subcategory_id: DataTypes.INTEGER,
    image_urls: DataTypes.JSON,
    description: DataTypes.TEXT,
    number_of_comments: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    views: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

module.exports = User_Post;
