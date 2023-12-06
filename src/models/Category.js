// src/models/Category.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../src/config/database');

const Category = sequelize.define('Category', {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Category;
