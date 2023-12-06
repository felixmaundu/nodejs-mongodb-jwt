// app/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../src/config/database');
// app/models/User.js
// const { DataTypes } = require('sequelize');
// const sequelize = require('../../config/database');

const User = sequelize.define('Users', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    country_id: {
        type: DataTypes.INTEGER
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    role: {
        type: DataTypes.ENUM('user', 'seller'),
        allowNull: true,
        defaultValue: 'user'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
    // Add the createdAt and updatedAt columns
}, {
    timestamps: true // This will enable createdAt and updatedAt columns
});

module.exports = User;
