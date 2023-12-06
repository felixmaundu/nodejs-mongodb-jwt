
// src/models/Subcategory.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../src/config/database');

const Subcategory = sequelize.define('Subcategory', {
    subcategory_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subcategory_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Subcategory;
